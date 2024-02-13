import React from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import JobTable from '../../../components/JobTable';
import { useCloseJobMutation, useMyJobPostsQuery } from '../../../features/jobs/jobApi';

const MyPosts = () => {
    const {candidatesReducer: {user}}: any = useSelector((state) => state);
    const {data, isLoading, isError} = useMyJobPostsQuery(user?.email);
    const [closeJob] = useCloseJobMutation();


    if(isLoading){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Data Loading...</h1>
    }
    if(isError){
        return <h1 className='text-3xl w-66 font-extrabold mx-auto text-center bg-blue-600 py-2 px-5 rounded text-white'>Error while loading data.</h1>
    }
    
    const handleClosePosition = async(id: any, status: any) => {
        const {data: {success, message}}: any = await closeJob({id, status});
        if(success){
            return swal("Done", message, "success")
        }
    }

    return (
        <div>
            <JobTable jobs={data?.jobs} handleClosePosition={handleClosePosition}/>
        </div>
    );
};

export default MyPosts;