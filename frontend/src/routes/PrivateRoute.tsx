import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ChilType = {
   children: React.ReactNode 
}

const PrivateRoute = ({children}: ChilType ) => {
    const location = useLocation()
    const user = true;
    const isLoading = false;
    if(isLoading){
        return <h1 className='text-4xl'>Loading...</h1>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return (
       <div>{children}</div>
    )
};

export default PrivateRoute;