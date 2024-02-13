import React from 'react';

const BackButton = ({navigate}: any) => {
    return (
        <button onClick={() => navigate(-1)} className='bg-blue-600 rounded-md py-2 px-5 text-lg text-white font-semibold'> Back</button>
    );
};

export default BackButton;