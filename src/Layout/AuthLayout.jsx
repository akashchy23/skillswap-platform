import React from 'react';
// import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                {/* <Navbar></Navbar> */}
            </header>
            <main className='mt-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;