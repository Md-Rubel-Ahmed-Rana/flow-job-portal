import React from 'react';
import { useSelector } from 'react-redux';
import JobTable from '../../../components/JobTable';
import { useGetMyJobsQuery } from '../../../features/jobs/jobApi';

const MyJobs = () => {
     const { candidatesReducer: {user} }: any = useSelector((state) => state);
    const {data: appliedJobs} = useGetMyJobsQuery(user?.email);

    return (
        <div>
            <JobTable jobs={appliedJobs} />
        </div>
    );
};

export default MyJobs;