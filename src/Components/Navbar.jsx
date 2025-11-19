import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo1.jpg'
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleSignOut = () => {
    //   console.log("clicked")
       logOut()
        .then(()=>{
            alert("You LoggedOut successfully!!")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link className='font-bold' to='/'>Home</Link>
                            <Link className='font-bold' to='profile'>Profile</Link>
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='w-12 h-15 hidden md:block' src={logo} alt="" />
                        <a className="btn btn-ghost text-2xl font-bold md:mt-2">SKILLSWAP</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className='font-bold mr-2' to='/'>Home</NavLink>
                        <NavLink className='font-bold' to='profile'>Profile</NavLink>
                        {/* <p>{user&&user.email}</p> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <button onClick={handleSignOut} className='btn btn-primary'>Logout</button>
                        :
                        <div className='space-x-1'>
                            <Link to='/auth/login' className='btn btn-primary px-6'>Login</Link>
                            <Link to="/auth/signup" className='btn btn-primary px-6'>SignUp</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;