import React from 'react';
import logo from "../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state: any) => {
        if(state.candidatesReducer){
            return state.candidatesReducer
        }else{
            return state.employerReducer
        }
    });
    
    const handleLogout = () => {
        signOut(auth)
        .then(() =>{
            navigate("/");
            window.location.reload()
        })
    }
    return (
        <nav className='lg:flex justify-between bg-slate-200 px-10 py-2 items-center'>
            <div className='flex gap-3 items-center'>
                <img className='h-16 w-16 rounded-full' src={logo} alt="" />
                <h3 className="text-3xl text-green-600 font-extrabold">Flow Jobs</h3>
            </div>
            <div>
                <ul className='flex gap-5 text-lg font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    {
                        user?.email ? <> 
                        <li><Link to="/">Friends</Link></li>
                        <li><Link to="/">Message</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li> <button onClick={handleLogout}>Logout</button> </li> 
                        </>
                        : 
                        <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                {
                    user?.name ? <h4 className='text-2xl font-extrabold'>{user?.name}</h4>
                                    :  null
                }
                {
                    user?.photoURL ? <img className='h-20 w-20 rounded-full' src={user?.photoURL} alt="" />
                                    : <FaUserAlt title='Profile' />
                }
                
            </div>
        </nav>
    );
};

export default Navbar;