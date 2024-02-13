import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='flex p-10 gap-10'>
                <div className='w-3/12'>
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;