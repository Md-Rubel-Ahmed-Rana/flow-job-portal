import React from 'react';
import { useSelector } from 'react-redux';
import AdminProfile from './AdminProfile';
import CandidateProfile from './CandidateProfile';
import EmployerProfile from './EmployerProfile';

const Profiles = () => {
    const {user: {role}} = useSelector((state: any) => state.candidatesReducer);
    return (
        <div>
            {
               role === "employer" && <EmployerProfile />
            }
            {
               role === "admin" && <AdminProfile /> 
            }
            {
               role === "candidate" && <CandidateProfile /> 
            }
        </div>
    );
};

export default Profiles;