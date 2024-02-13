import React from 'react';
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import MyButton from '../../../components/MyButton';
import { useUpdateCandidateMutation } from '../../../features/candidate/candidateApi';

type Inputs = {
  name: string,
  email: string,
  position: string,
  skills: any,
  projects: any,
  experience: number
};

const EditProfile = () => {
    const navigate = useNavigate();
    const {candidatesReducer: {user}}: any = useSelector((state) => state);
    const { register,control, handleSubmit } = useForm<Inputs>();
    const {fields: skills, append: addSkills, remove: removeSkill}: any = useFieldArray({control, name: "skills"})
    const {fields: projects, append: addProjects, remove: removeProject}: any = useFieldArray({control, name: "projects"});
    const [updateCandidate] = useUpdateCandidateMutation()


    const onSubmit: SubmitHandler<Inputs> = async({position, skills, projects, experience}) => {
        
        const candidate = {
            name: user?.name,
            email: user?.email,
            position,
            skills,
            projects,
            experience
        }
        const {data: {success, message}}: any = await updateCandidate({data: candidate, id:user._id});
        if(success){
            swal("Great", message, "success")
            setTimeout(() => {
                navigate("/dashboard")
            }, 500);
            return; 
        }
    };


    return (
    <div className='w-4/5 mx-auto my-10'>
        <h1 className="text-3xl font-bold text-center">Edit your profile</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='my-2 flex gap-5'>
            <input className='p-2 w-1/2 cursor-not-allowed bg-white' readOnly defaultValue={user?.name} {...register("name")} />
            <input className='p-2 w-1/2 cursor-not-allowed bg-white' readOnly  defaultValue={user?.email} {...register("email")} />
        </div>
        <div>
            <h2 className=" my-2 font-semibold">Position:</h2>
            <input 
            className='p-2 w-1/2  bg-white' 
            defaultValue={user?.position} 
            {...register("position", { required: true })} 
            placeholder="Full Stack Developer" />
        </div>
        <div>
            <h2 className=" my-2 font-semibold">Experience in year:</h2>
            <input 
            className='p-2 w-1/2  bg-white' 
            defaultValue={user?.experience}
            type="number"
            {...register("experience", { required: true })} 
            placeholder="Your experience: 2 years" />
        </div>
        <div className='my-5'>
            <div>
                <h2 className=" my-2 font-semibold">Your Skills:</h2>
                {skills?.map((item: any, index: any) =>  <div key={index}className='flex items-center gap-3 mb-5'>
                    <input
                    className='p-2 '
                    type='text'
                    {...register(`skills.${index}`)}
                            />
                <span onClick={() => removeSkill(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                </div>
                )}
                <span onClick={() => addSkills("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Skill</span>
            </div>
        </div>
        <div className='my-5'>
            <div>
                <h2 className=" my-2 font-semibold">Your Projects:</h2>
                {projects?.map((item: any, index: any) =>  <div key={index}className='flex items-center gap-3 mb-5'>
                    <input
                    className='p-2 bg-white'
                    type='text'
                    placeholder='Project name'
                    {...register(`projects.${index}.projectName`)}
                    />
                    <input
                    className='p-2 bg-white'
                    type='text'
                    placeholder='Live link'
                    {...register(`projects.${index}.liveLink`)}
                    />
                    <input
                    className='p-2 bg-white'
                    type='text'
                    placeholder='Github link'
                    {...register(`projects.${index}.githubLink`)}
                    />
                <span onClick={() => removeProject(index)} className="py-2 px-5 cursor-pointer hover:bg-red-700 bg-red-500 rounded-md text-white">Delete</span>
                </div>
                )}
                <span onClick={() => addProjects("")} className="py-2 px-5 cursor-pointer hover:bg-blue-700 bg-blue-500 rounded-md text-white">Add Project</span>
            </div>
        </div>
        <MyButton text='Save changes'/>
    </form>
    </div>
    );
};

export default EditProfile;