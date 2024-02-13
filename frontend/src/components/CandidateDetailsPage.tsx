import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const CandidateDetailsPage = ({candidate}: any) => {
    const {candidatesReducer: {user}}: any = useSelector((state) => state);
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Name: {candidate?.name}</h1>
            <h1 className='text-xl font-semibold'>Position: Full Stack Developer</h1>
            <h1 className='text-xl font-semibold'> Skills: 
            {
                candidate?.skills.map((skill: any, index: any) => <span className="mx-2">{skill }</span>)
            }
            </h1>
            <h1 className='text-xl font-semibold'>Experience: {candidate?.experience} years.</h1>
            <h1 className='text-xl font-semibold'>Email: {candidate?.email}</h1>
            <ul>
                <h4 className='text-xl font-semibold'>Projects:</h4>
                {
                    candidate?.projects.map((project: any) => <li className="ml-2">
                    <strong className="block">Name: {project?.projectName}</strong>
                    <strong className="block">Live link: <a
                    rel="noreferrer" target={'_blank'}
                    className="text-blue-600" href={project?.liveLink}>live link</a></strong>
                    <strong className="block">Github: <a rel="noreferrer" target={'_blank'} className="text-blue-600" href={project?.githubLink}>github link</a></strong>
                </li>)
                }
                
            </ul>
            {
                user?.role  === "candidate" && <div onClick={() =>  navigate("/editProfile")}>
                <MyButton text="Edit Profile"/>
            </div>
            }
        </div>
    );
};

export default CandidateDetailsPage;