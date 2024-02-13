import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable = ({applicants}: any) => {
    const navigate = useNavigate();
    return (
        <div>
            <table>
                <thead className='flex justify-start bg-blue-700 text-white p-2 rounded'>
                    <th className='w-10 py-2 text-center'></th>
                    <th className='w-44 py-2 text-center'>Name</th>
                    <th className='w-44 py-2 text-center'>Position</th>
                    <th className='w-44 py-2 text-center'>Email</th>
                    <th className='w-44 py-2 text-center'>Details</th>
                </thead>
                <tbody>
                    {
                        applicants && applicants.map((user: any, index: number) => {
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:rounded hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center py-2'>{index + 1}</td>
                                    <td className='w-44 text-center py-2'>{user?.candidateName}</td>
                                    <td className='w-44 text-center py-2'>Frontend Developer</td>
                                    <td className='w-44 text-center'><button  className='px-2 py-1 rounded-lg text-white hover:bg-white hover:text-black bg-green-700'>{user?.candidateEmail}</button></td>
                                    <td className='w-44 text-center'><button onClick={() => navigate(`/details/${user?.candidateId}`)} className='px-2 py-1 rounded-lg text-white hover:bg-white hover:text-black bg-green-700'>See Details</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;