import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
     const {createUser}=use(AuthContext)

    const handleSignup=(e)=>{
        e.preventDefault()
        // console.log("clicked")
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)
        createUser(email,password)
         .then(result=>{
            console.log(result.user)
         })
         .catch(error=>{
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
                        <input name='password' type="password" className="input" placeholder="Password" required />
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