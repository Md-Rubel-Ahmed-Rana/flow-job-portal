import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import CandidateDetailsPage from '../../components/CandidateDetailsPage';
import { useGetUserDetailsQuery } from '../../features/jobs/jobApi';

const CandidateDetails = () => {
    const navigate = useNavigate();
    const {id}: any = useParams();
    const {data} = useGetUserDetailsQuery(id);
    const candidate = data?.candidate;

    return (
        <div className='m-10'>
            {
                candidate?.role === "candidate" && <BackButton navigate={navigate} />
            }
            <div className='my-5'>
                <CandidateDetailsPage candidate={candidate}/>
            </div>
        </div>
    );
};

export default CandidateDetails;