import React from 'react';

const Candidates = () => {
    
    const candidates = [
        {id: 1, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"},
        {id: 2, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"},
        {id: 3, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"},
        {id: 4, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"},
        {id: 5, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"},
        {id: 6, name: "Rubel", email: "rubel@gmail.com", phone: "01758049882", role: "Candidate", total: "6"}
    ]

    return (
        <div className='w-full'>
            <div className='flex justify-between py-1'>
                <input className='p-1 w-full' type="text" name="name" id="name" placeholder='Enter name to search' />
                <button className='bg-blue-700 ml-2 px-10 text-white rounded'>Search</button>
            </div>
            <table>
                <thead className='flex justify-start bg-blue-700 text-white p-2 rounded'>
                    <th className='w-10 py-2 text-center'></th>
                    <th className='w-44 py-2 text-center'>Name</th>
                    <th className='w-44 py-2 text-center'>Email</th>
                    <th className='w-44 py-2 text-center'>Phone</th>
                    <th className='w-44 py-2 text-center'>Role</th>
                    <th className='w-44 py-2 text-center'>Total Job</th>
                    <th className='w-44 py-2 text-center'>Action</th>
                </thead>
                <tbody>
                    {
                        candidates && candidates.map((candidate, index) => {
                            const {name, email, phone, role, total} = candidate;
                            return (
                                <tr key={index} className='flex justify-start p-2 border hover:text-white hover:bg-blue-500'>
                                    <td className='w-10 text-center py-2'>{index + 1}</td>
                                    <td className='w-44 text-center py-2'>{name}</td>
                                    <td className='w-44 text-center py-2'>{email}</td>
                                    <td className='w-44 text-center py-2'>{phone}</td>
                                    <td className='w-44 text-center py-2'>{role}</td>
                                    <td className='w-44 text-center py-2'>{total}</td>
                                    <td className='w-44 text-center'><button className='bg-red-700 px-2 py-1 rounded-lg text-white'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Candidates;