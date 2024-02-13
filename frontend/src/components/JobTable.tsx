import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobTable = ({jobs, handleClosePosition}: any) => {
    const navigate = useNavigate();
    const {candidatesReducer: {user}}: any = useSelector((state) => state);

return (
    <div className='w-full'>
        <div className='flex justify-between py-1'>
            <input className='p-1 w-full' type="text" name="name" id="name" placeholder='Enter name to search' />
            <button className='bg-blue-700 ml-2 px-10 text-white rounded'>Search</button>
        </div>
        <table>
            <thead className='flex justify-start bg-blue-700 text-white p-2 rounded'>
                <th className='w-10 py-2 text-center'></th>
                <th className='w-44 py-2 text-center'>Title</th>
                {
                    user?.role !== "employer" && <th className='w-44 py-2 text-center'>Location</th>
                }
                <th className='w-44 py-2 text-center'>Type</th>
                <th className='w-44 py-2 text-center'>Salary</th>
                {
                    user?.role === "employer" && <>
                        <th className='w-44 py-2 text-center'>Status</th>
                        <th className='w-44 py-2 text-center'>Applicants</th>
                    </> 
                    
                }
                <th className='w-44 py-2 text-center'>More</th>
            </thead>
            <tbody>
            {
            jobs && jobs.map((job: {}, index: number) => {
                const {_id, title, location, jobType, salary, applicants, status}: any = job;
                return (
                    <tr key={index} className='flex justify-start p-2 border hover:rounded hover:text-white hover:bg-blue-500'>
                        <td className='w-10 text-center py-2'>{index + 1}</td>
                        <td className='w-44 text-center py-2'>{title}</td>
                        {
                            user?.role !== "employer" && <td className='w-44 text-center py-2'>{location}</td>
                        }
                        <td className='w-44 text-center py-2'>{jobType}</td>
                        <td className='w-44 text-center py-2'>{salary}</td>
                        {
                            user?.role === "employer" && <>
                                <td className='w-44 text-center'>
                                    <button 
                                     onClick={() => handleClosePosition(_id, status === "open" ? "closed" : "open")} className="bg-gray-400 rounded py-2 w-full">
                                      {status === "open" ? "Open" : "Closed"}
                                    </button>
                                </td>
                                <td className='w-44 text-center'>
                                <button 
                                onClick={() => navigate(`/dashboard/applicants/${_id}`)}
                                className="bg-yellow-700 text-white rounded py-2 w-full">{applicants.length} See All</button> 
                                </td>
                            </>
                        }
                        <td className='w-44 text-center'><button onClick={() => navigate(`/jobs/${_id}`)} className='px-2 py-1 rounded-lg text-white hover:bg-white hover:text-black bg-green-700'>Details</button></td>
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    </div>
);
};

export default JobTable;