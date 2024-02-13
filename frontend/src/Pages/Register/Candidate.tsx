import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import MyButton from '../../components/MyButton';
import { useCreateCandidateMutation } from '../../features/candidate/candidateApi';
import { createCandidate } from '../../features/candidate/candidateSlice';

type Inputs = {
  name: string,
  email: string,
  password: any,
};


const Candidate = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const [storeCandidate] = useCreateCandidateMutation()
    const dispatch: any = useDispatch();
    

    const onSubmit: SubmitHandler<Inputs> = async({name, email, password }) => {    
        dispatch(createCandidate({name, email, password }))
        .then((result: any) => {
            if(result.payload.uid){
                storeCandidate({name, email, role: "candidate"});
            }else{
                return toast.error("There was a problem. Try again with different email")
            }
        })
    };
    


  return (
        <form className='w-full  px-10  pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center  font-bold text-white">Create Candidate account</h4>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter name.</p>
                <input type="text" className='p-2 w-full rounded' {...register("name", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter email</p>
                <input type="email" className='p-2 w-full rounded' {...register("email", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                <input type="password" className='p-2 w-full rounded' {...register("password", { required: true })} />
            </div>
            <MyButton text="Register" />
        </form>
  );
};

export default Candidate;