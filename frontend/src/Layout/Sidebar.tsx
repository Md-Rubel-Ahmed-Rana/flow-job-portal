import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const {user} = useSelector((state: any) => {
        if(state.candidatesReducer){
            return state.candidatesReducer
        }else{
            return state.employerReducer
        }
    });
    return (
        <nav className='sticky top-0 bg-slate-300 h-full px-2 py-5'>
            <ul className='flex flex-col gap-3'>
                {
                    user.role === "admin" && <div>
                        <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard">All Users</Link></li>
                        <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/admins">Admins</Link></li>
                        <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/recruiters">Recruiters</Link></li>
                        <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/candidates">Candidates</Link></li>
                    
                    </div>
                }
                
                {
                    user?.role === "employer" || user?.role === "recruiter"  ? <div>
                        <li className='font-bold hover:underline w-full  p-1 rounded text-xl'><Link to="/dashboard/myposts">My Job Posts</Link></li>
                        <li className='font-bold hover:underline  p-1 rounded text-xl'><Link to="/dashboard/newjob">Add New Job</Link></li>
                    </div> : null
                }
                {
                    user.role === "candidate" && <>
                    <li className='font-bold hover:underline p-1 rounded text-xl'><Link to="/dashboard">Profile</Link></li>
                    <li className='font-bold hover:underline p-1 rounded text-xl'><Link to="/dashboard/myjobs">Applied Jobs</Link></li>
                    </>
                }
                
            </ul>
        </nav>
    );
};

export default Sidebar;