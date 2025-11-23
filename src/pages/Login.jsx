import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const emailRef =useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const [showpass,setShowPass]=useState(false)
    // console.log(location)
    const { signIn } = use(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault()
        console.log("clicked")
        const email = event.target.email.value;
        const password = event.target.password.value;
        //   console.log(email,password)
        signIn(email,password)
         .then(result=>{
            console.log(result.user)
            navigate(`${location.state? location.state: '/'}`)

         })
         .catch(error=>{
            const errorMessage = error.message;
            alert(errorMessage)
         })

    }

    const handleToggle=()=>{
        setShowPass(!showpass)
    }
    const handleResetPassword=()=>{
          const email = emailRef.current.value
       navigate(`/forget/${ email}`)
    
    }
    return (
        <div>
            <form onSubmit={handleSignIn} className='flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className='font-semibold text-center text-2xl'>Login your account</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input ref={emailRef} name="email" type="email" className="input" placeholder="Email" required />
                            {/* password */}
                            <label className="label">Password</label>
                           <div className='relative'>
                             <input name="password" type={showpass?"text":"password"} className="input" placeholder="Password" required />
                             <button onClick={handleToggle} type='button' className='btn btn-xs absolute top-2 right-5'>{showpass?<IoMdEyeOff />:<FaEye />}</button>
                           </div>

                            <div> 
                                <button onClick={handleResetPassword} type='button' className='hover:underline cursor-pointer '>Forgot password?</button>
                            </div>

                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-center font-semibold pt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/signup'>SignUp</Link></p>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;