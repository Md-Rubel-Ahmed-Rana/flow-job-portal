import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import MyButton from '../../components/MyButton';
import { useEmployerRegisterMutation } from '../../features/employer/employerApi';
import { createEmployer } from '../../features/employer/employerSlice';

type Inputs = {
  name: string,
  company: string,
  image: any,
  address: string,
  password: string
  officeEmail: string
  email: string
};


const Recruiter = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const dispatch: any = useDispatch();
    const [storeEmployer] = useEmployerRegisterMutation()

    const onSubmit: SubmitHandler<Inputs> = ({name, password, email, company, address, officeEmail}) => {
        dispatch(createEmployer({name, email, password}))
        .then((result: any) => {
            if(result.payload.uid){
                storeEmployer({name, email, company, address, officeEmail});
            }else{
                return toast.error("There was a problem. Try again with different email")
            }
        })  
    };

  return (
        <form className='w-full  px-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
            <h4 className="text-3xl text-center font-bold text-white">Create Employer account</h4>
            <div className='mb-3 '>
                <p className='text-lg text-white font-semibold mb-1'>Upload image.</p>
                <input type="file" className='p-2 w-full bg-white rounded' {...register("image")} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Your name.</p>
                <input className='p-2 w-full rounded' {...register("name", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Your email</p>
                <input className='p-2 w-full rounded' {...register("email", { required: true })} />
            </div>
            <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Comapny name.</p>
                <input className='p-2 w-full rounded' {...register("company", { required: true })} />
            </div>
            <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Comapny Address.</p>
                <input className='p-2 w-full rounded' {...register("address", { required: true })} />
            </div>
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Official email</p>
                <input className='p-2 w-full rounded' {...register("officeEmail", { required: true })} />
            </div>
            
            <div className='mb-3'>
                <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                <input className='p-2 w-full rounded' {...register("password", { required: true })} />
            </div>
            <MyButton text="Register" />
        </form>
  );
};

export default Recruiter;