import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyButton from "../../../components/MyButton";
import { useCreateJobPostMutation } from '../../../features/jobs/jobApi';


type inputTypes = {
    title: string,
    location: string,
    jobPlace: string,
    employerEmail: string,
    officialEmail: string,
    website: string,
    salary: string,
    workDay: string,
    workTime: string,
    experience: string,
    jobType: string,
    employerType: string,
    overview: string,
    skills: any,
    responsibilities: any,
    requirements: any,
    companySize: string,
    companyName: string,
}

const AddJob = () => {
    const navigate = useNavigate();
    const { candidatesReducer: {user} }: any = useSelector((state) => state);

    const { register, handleSubmit, control, reset } = useForm<inputTypes>();
    const {fields: skillsFields, append: addSkills, remove: removeSkill} = useFieldArray({control, name: "skills"});
    const { fields: reqFields, append: addRequirements, remove: removeRequirement } = useFieldArray({control, name: "requirements"});
    const { fields: resFields, append: addResponsibility, remove: removeResponsibility } = useFieldArray({control, name: "responsibilities"});

    const [postJob] = useCreateJobPostMutation();
    const onSubmit = async(newJob: any) => {
        const { data }: any = await postJob(newJob);
        const { success, message } = data || {};
        if (success){
            toast.success(message);
            reset();
            navigate("/dashboard/myposts")
        }
    };

    return (
        <div>
        <h3 className="text-4xl text-center font-bold">Add New Job</h3>
        <form onSubmit={handleSubmit(onSubmit)}  className='w-full p-10'>
            <div className="flex">
                <div>
                    <div className='mb-3'>
                        <label htmlFor="title">
                            <span className="my-2 font-semibold"> Job Title</span>
                            <input className='ml-2 p-2 ' {...register("title", { required: true })} placeholder="Full Stack Developer" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className="my-2 font-semibold">Location</span>
                            <input className='ml-2 p-2' {...register("location", { required: true })} placeholder="City, Country" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <span className=" my-2 mr-2 font-semibold">Job Place:</span>
                        <select {...register("jobPlace", { required: true })} className='p-2 ' name="jobPlace" id="jobPlace">
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Remote/Onsite">Remote/Onsite</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Employer email</span>
                            <input readOnly defaultValue={user?.email} className='ml-2 p-2 ' {...register("employerEmail", { required: true })} />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Official email</span>
                            <input defaultValue={user?.officeEmail} className='ml-2 p-2 ' {...register("officialEmail", { required: true })} readOnly />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="website">
                            <span className=" my-2 font-semibold">Website</span>
                            <input className='ml-2 p-2 ' {...register("website", { required: true })} placeholder="www.example.com" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Salary Range</span>
                            <input className='ml-2 p-2 ' {...register("salary", { required: true })} placeholder="20k-30k" />
                        </label>
                    </div>
                </div>
                <div className="lg:ml-40">
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Working Day/week</span>
                                <input className='ml-2 p-2 ' {...register("workDay", { required: true })} placeholder="5/6" /> 
                    </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Working Time</span>
                            <input className='ml-2 p-2 ' {...register("workTime", { required: true })} placeholder="6h-8h" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <span className=" my-2 mr-2 font-semibold">Job Type:</span>
                        <select {...register("jobType", { required: true })} className='p-2 ' name="jobType" id="jobType">
                            <option selected value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Experience </span>
                            <input className='ml-2 p-2 ' {...register("experience", { required: true })} placeholder="Example: 2-5 years" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Employer Type </span>
                            <input className='ml-2 p-2 ' {...register("employerType", { required: true })} placeholder="Example: HR or Recruiter" />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Location">
                            <span className=" my-2 font-semibold">Company Name</span>
                            <input defaultValue={user?.company} className='ml-2 p-2 ' {...register("companyName", { required: true })} readOnly />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <span className=" my-2 mr-2 font-semibold">Company Size</span>
                        <select {...register("companySize", { required: true })} className='p-2 ' name="companySize" id="companySize">
                            <option selected value="Under 10">Under 10</option>
                            <option value="10-50">10-50</option>
                            <option value="50-100">50-100</option>
                            <option value="Above 100">Above 100</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* overview */}
            <div>
                <h2 className=" font-semibold">Job overview</h2>
                <textarea className="w-full p-4" {...register("overview", { required: true })} name="overview" id="overview" cols={30} rows={5}></textarea>
            </div>

            <div className="my-5">
                <div>
                    <h2 className=" my-2 font-semibold">Required Skills:</h2>
                    {skillsFields?.map((item: any, index: any) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 '
                                    type='text'
                                    {...register(`skills.${index}`)}
                                />
                                <span onClick={() => removeSkill(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addSkills("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Skill</span>
            </div>

            <div className="my-5">
                <div>
                    <h2 className=" my-2 font-semibold">Requirements:</h2>
                    {reqFields?.map((item: any, index: any) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 '
                                    type='text'
                                    {...register(`requirements.${index}`)}
                                />
                                <span onClick={() => removeRequirement(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addRequirements("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Requirement</span>
            </div>
            <div className="my-5">
                <div>
                    <h2 className=" my-2 font-semibold">Responsibilities:</h2>
                    {resFields?.map((item: any, index: any) => {
                        return (
                            <div key={item.key} className='flex items-center gap-3 mb-5'>
                                <input
                                    className='w-full p-2 '
                                    type='text'
                                    {...register(`responsibilities.${index}`)}
                                />
                                <span onClick={() => removeResponsibility(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                            </div>
                        );
                    })}
                </div>
                <span onClick={() => addResponsibility("")} className="py-2 cursor-pointer px-5 hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Responsibility</span>
            </div>
            <MyButton text="Add Job" />
        </form>
    </div>
    );
};

export default AddJob;