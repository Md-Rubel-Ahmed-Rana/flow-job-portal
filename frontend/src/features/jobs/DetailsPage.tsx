import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import {  useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useApplyJobMutation, useGetSingleJobQuery, useJobQueryMutation } from './jobApi';
import BackButton from '../../components/BackButton';

const JobDetails = () => {
    let isApplied = false;
    const [applied, setApplied] = useState(false)
    const { candidatesReducer: {user} }: any = useSelector((state) => state);
    const navigate = useNavigate();
    const {id}: any = useParams();
    const {data} = useGetSingleJobQuery(id);
    const [applyJob] = useApplyJobMutation();
    const {register, handleSubmit, reset} = useForm();
    const [sendJobQuestion] = useJobQueryMutation() 

     const {title, employerEmail, jobType, jobPlace, website, salary, workDay, workTime, location, skills, requirements, responsibilities, companySize, companyName, experience, employerType, applicants, overview, queries } = data?.job || {}


     if(applicants){
            applicants.forEach((applicant: {}) => {
                const {candidateEmail}: any = applicant;
                if(candidateEmail === user?.email){
                    isApplied = true;
                }
        });
     }
     const handleApply = async() => {
        const data = {
            candidateId: user?._id,
            candidateName: user?.name,
            candidateEmail: user?.email,
            jobId: id
        }
        const {data: {success, message}}: any = await applyJob(data);
        if(success){
            setApplied(true)
            isApplied = true;
            swal("Great!", `${message}` , "success")
            return;
        }
        setApplied(false)
     }


     const handleJobQuery = async({question, answer}: any) => {
        const query = {
            jobId: id,
            text: question || answer,
            name: user?.name,
        }
        sendJobQuestion(query);
        reset();
     }


    return (
        <div className='mx-10'>
            <div className='my-5'>
                <BackButton navigate={navigate} />
            </div>
            <div>
                <h1 className="text-3xl font-bold">Job Position: {title} ({jobPlace})</h1>
                <h5 className='text-xl font-semibold'>Location: {location}.</h5>
                <h5 className='text-xl font-semibold'>Company Name: {companyName}.</h5>
                <h5 className='text-xl font-semibold'>Company Size: {companySize}.</h5>
            </div>

            <div className='mt-5 text-xl font-medium'>
                <p>Work Day: {workDay} days/week</p>
                <p>Job Type: {jobType}</p>
                <p>Work Time: {workTime}/day</p>
                <p>Experience: {experience}</p>
                <p>Salary: {salary}/month</p>
            </div>

            <div className='mt-5 text-xl font-medium'>
                <p>Employer Email: {employerEmail}</p>
                <p>Employer Position: {employerType ? employerType : "Unknown"}</p>
                <p>Website: <a href={website} rel="noreferrer" target={'_blank'}  className='text-blue-700 font-extrabold' >Visit Now</a></p>
            </div>
            
            {/* apply button  */}
            <div>
                {
                    user?.role !== "employer" && <button disabled={isApplied || applied}  onClick={handleApply} className='bg-blue-700 py-2 px-16 mt-4 text-white rounded'>
                        {isApplied || applied ? "Already applied" : "Apply"}
                    </button>
                }
            </div>

            <div>
                <h5 className='text-xl mt-5 font-semibold'>Job overview</h5>
                <p>{overview}</p>
            </div>
            <h5 className='text-2xl font-bold mt-5'>Skills</h5>
            <ul className='text-xl font-medium'>
                {
                skills && skills.map((skill: "") => <li className='list-disc ml-5'>{skill}</li>)
                }
            </ul>

            <h5 className='text-2xl font-bold mt-5'>Requirements</h5>
            <ul className='text-xl font-medium'>
                {
                requirements && requirements.map((requirement: "") => <li className='list-disc ml-5'>{requirement}</li>)
                }
            </ul>

            <h5 className='text-2xl font-semibold mt-5'>Responsibilities</h5>
            <ul className='text-xl mb-5 font-medium'>
                {
                responsibilities && responsibilities.map((responsibility: "") => <li className='list-disc ml-5'>{responsibility}</li>)
                }
            </ul>
            <hr />

             {/* Chat with Employer  */}
            <div className='my-5'>
                <h3 className="text-2xl font-bold">Ask Question to Employer</h3>
                <div>
                    {
                        queries && queries.map(({text, name}: any) => <div className='my-2 bg-white p-2'>
                            <h2 className='text-xl font-bold'>{name}</h2>
                            <h2 className='ml-5'>{text}</h2>
                        </div>)
                    }
                </div>
                <form onSubmit={handleSubmit(handleJobQuery)}>
                    {
                    user.role === "candidate" && <input 
                    {...register("question", {required: true})}
                    className='p-2 rounded border-2 shadow-md w-1/2' type="text" id="" placeholder='Write your question' />
                }
                
                {
                    user?.role === "employer" && <input 
                    {...register("answer",{required: true})}
                    className='p-2 rounded border-2 shadow-md w-1/2' type="text"  id="" placeholder='Reply' />
                }
                <button type='submit' className='py-2 px-5 rounded text-white bg-blue-700'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default JobDetails;