import React from 'react';

type buttonText = {
    text: string
}

const MyButton = ({text}: buttonText) => {
    return (
        <div>
            <button className='w-full bg-blue-900 hover:bg-blue-800 p-3 text-white rounded text-xl font-bold' type="submit">{text}</button>
        </div>
    );
};

export default MyButton;