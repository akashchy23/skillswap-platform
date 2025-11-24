import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const navigate = useNavigate()
    const [showpass, setShowPass] = useState(false)
    const handleToggle = () => {
        // console.log("toggle ")
        setShowPass(!showpass)
    }
    const handleSignup = (e) => {
        e.preventDefault()
        // console.log("clicked")
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        // console.log(email,password)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            alert('Password must contain at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            alert('Password must contain at least one lowercase letter');
            return;
        }


        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                updateUser(
                    {
                        displayName: name,
                        photoURL: photourl
                    })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photourl })
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage)
            })

    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className='font-semibold text-center text-2xl'>SignUp your account</h1>
                <form onSubmit={handleSignup} className="card-body ">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Enter your name" required />

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name='photourl' type="text" className="input" placeholder="Photo URL" required />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* Password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showpass ? "text" : "password"} className="input" placeholder="Password" required />
                            <button type='button' onClick={handleToggle} className='btn btn-xs absolute right-5 top-2'>{showpass ? <IoMdEyeOff /> : <FaEye />}</button>
                        </div>

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
                        <p className='text-center font-semibold pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;