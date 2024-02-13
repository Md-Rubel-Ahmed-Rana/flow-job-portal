import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto text-center h-screen p-10'>
            <h2 className=" text-2xl font-bold">Oops!! 404 Error.</h2>
            <p className='text-lg font-bold'>Invalid route.</p>
            <p className='text-lg font-bold'>Could not found: 404</p>
            <p className='mt-5'><Link className='bg-blue-700 py-2 px-5 rounded text-white' to="/">Go Back</Link></p>
        </div>
    );
};

export default ErrorPage;