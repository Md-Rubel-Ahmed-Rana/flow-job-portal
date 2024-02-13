import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import login from "../../assets/images/login_logo.png"
import MyButton from '../../components/MyButton';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/candidate/candidateSlice';

type Inputs = {
  email: string,
  password: string,
};

const Login = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const dispatch: any = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = ({email, password}) => {
    dispatch(loginUser({email, password}))
    reset()
  };

  return (
    <div className='flex'>
        <div className='w-1/2 '>
            <img className='h-full' src={login} alt="" />
        </div>
        <div className='w-1/2 bg-blue-600 mx-auto'>
            <form className='w-full  px-10 pt-10 pb-5' onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl text-white text-center font-bold mb-10">Please Login</h3>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter email</p>
                    <input className='p-2 w-full rounded' {...register("email", { required: true })} />
                </div>
                <div className='mb-3'>
                    <p className='text-lg text-white font-semibold mb-1'>Enter password</p>
                    <input className='p-2 w-full rounded' {...register("password", { required: true })} />
                </div>
                <MyButton text="Login" />
            </form>
            <div  className='px-10 mb-5'>
                <MyButton  text="Login with Google" />
            </div>
        </div>
    </div>
  );
};

export default Login;