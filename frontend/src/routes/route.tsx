import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import JobDetailsPage from '../features/jobs/DetailsPage';
import Jobs from '../features/jobs/Jobs';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Admins from '../Pages/Dashboard/Admin/Admins';
import Candidates from '../Pages/Dashboard/Admin/Candidates';
import Recruiters from '../Pages/Dashboard/Admin/Recruiters';
import MyJobs from '../Pages/Dashboard/Candidate/MyJobs';
import Profiles from '../Pages/Dashboard/Profiles/Profiles';
import AddJob from '../Pages/Dashboard/Recruiter/AddJob';
import Applicants from '../Pages/Dashboard/Recruiter/Applicants';
import MyPosts from '../Pages/Dashboard/Recruiter/MyPosts';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import UserDetails from '../Pages/CandidateDetails/CandidateDetails';
import ErrorPage from '../Shared/ErrorPage';
import PrivateRoute from './PrivateRoute';
import EditProfile from '../Pages/Dashboard/Candidate/EditProfile';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage /> ,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
            {
                path: "/jobs/:id",
                element: <JobDetailsPage />
            },
            {
                path: "/details/:id",
                element: <UserDetails />
            },
            {
                path: "/editProfile",
                element: <EditProfile />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Profiles />
            },
            {
                path: "/dashboard/admins",
                element: <Admins />
            },
            {
                path: "/dashboard/recruiters",
                element: <Recruiters/>
            },
            {
                path: "/dashboard/candidates",
                element: <Candidates/>
            },
            {
                path: "/dashboard/myposts",
                element: <MyPosts/>
            },
            {
                path: "/dashboard/myjobs",
                element: <MyJobs/>
            },
            {
                path: "/dashboard/newjob",
                element: <AddJob/>
            },
            {
                path: "/dashboard/applicants/:id",
                element: <Applicants />
            }
        ]
    }
])

export default router;