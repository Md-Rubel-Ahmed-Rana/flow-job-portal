import { useSelector } from "react-redux";
import CandidateDetailsPage from "../../../components/CandidateDetailsPage";

const CandidateProfile = () => {
    const {candidatesReducer: {user}}: any = useSelector((state) => state);
    return (
        <div>
            <CandidateDetailsPage candidate={user} />
        </div>
    );
};

export default CandidateProfile;