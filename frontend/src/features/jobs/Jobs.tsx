import { useNavigate } from 'react-router-dom';
import { useGetJobsQuery } from './jobApi';

const Jobs = () => {
    const navigate = useNavigate()
    const {data,  isLoading, error, isError}: any = useGetJobsQuery([]);
    const jobs = data?.jobs;

    if(isLoading){
        return <h2 className="text-3xl my-5 text-center font-bold w-48 mx-auto bg-blue-800 text-white py-3 px-5 rounded">Loading...</h2>
    }

    if(isError){
       return <h2 className="text-3xl my-5 text-center font-bold w-48 mx-auto bg-blue-800 text-white py-3 px-5 rounded">{error}</h2>
    }

    return (
        <div >
            {error &&  <h2 className="text-3xl text-center font-bold w-48 mx-auto bg-blue-800 text-white">{error}</h2>}
            <h2 className="text-3xl mt-3 text-center font-bold">Find Your Dream Job</h2>
            <div className='px-20 py-5 w-full text-center'>
                <input  name="searchText" className='w-4/5 px-10 py-2' type="text" placeholder='Searh job here' /> <button className='btn btn-sm btn-primary'>Search</button>
            </div>
            <div>
                {
                    jobs && jobs.map((job: any) => {
                        const {_id, title, location, salary, workDay, workTime} = job
                        return (
                            <div className='bg-slate-200 p-10 mb-2'>
                                <h3 className='text-3xl font-bold'>{title}</h3>
                                <div className='text-xl font-medium'>
                                    <p>Location: {location}</p>
                                    <p>Working Day: {workDay}/week</p>
                                    <p>Working Time: {workTime}</p>
                                    <p>Salary: {salary}</p>
                                </div>
                                <div className='mt-5'>
                                    <button onClick={() => navigate(`/jobs/${_id}`)} className="btn px-20 btn-primary">Details</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Jobs;