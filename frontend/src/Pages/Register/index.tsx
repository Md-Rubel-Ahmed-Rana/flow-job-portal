import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import React, {useState} from 'react';
import login from "../../assets/images/login_logo.png"
import MyButton from '../../components/MyButton';
import app from '../../config/firebase.config';
import Candidate from './Candidate';
import Recruiter from './Recruiter';

const auth = getAuth(app)


const Register = () => {
    const [position , setPosition] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className='flex'>
        <div className='w-1/2 '>
            <img className='h-full' src={login} alt="" />
        </div>
        <div className='w-1/2 bg-blue-600 mx-auto pt-5'>
            <div className='text-center'>
                <button onClick={() => setPosition(false)} className={`${!position ? "bg-white text-black border-red-600" : "bg-blue-800 text-white"} font-bold text-white rounded p-2 m-2 outline-none`}>Candidate</button>
                <button onClick={() => setPosition(true)} className={`${position ? "bg-white text-black" : "bg-blue-800 text-white"} font-bold text-white rounded p-2 m-2 outline-none`}>Employer</button>
            </div>
            {
                position ? <Recruiter /> 
                         : <Candidate />
            }
            <div onClick={handleGoogleLogin} className='px-10 mb-5'>
                <MyButton  text="Login with Google" />
            </div>
        </div>
    </div>
  );
};

export default Register;