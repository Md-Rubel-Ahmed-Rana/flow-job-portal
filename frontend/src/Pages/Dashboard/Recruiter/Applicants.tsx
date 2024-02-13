import React from 'react';
import { useParams } from 'react-router-dom';
import UserTable from '../../../components/UserTable';
import { useGetSingleJobQuery } from '../../../features/jobs/jobApi';

const Applicants = () => {
    const {id}: any = useParams();
    const {data} = useGetSingleJobQuery(id);
    const applicants = data?.job?.applicants
    return (
        <div>
            <h1 className="text-3xl font-bold">Applicants for Job: {data?.job?.title} </h1>
            <div className='my-5'>
                <UserTable applicants={applicants} />
            </div>
        </div>
    );
};

export default Applicants;