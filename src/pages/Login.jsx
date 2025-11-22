import React, { use, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const emailRef =useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const { signIn,forgetPassword } = use(AuthContext)
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
    const handleResetPassword=()=>{
       const email = emailRef.current.value
    //    console.log(email)
    forgetPassword(email)
     .then(()=>{
        alert("Please cheak your email")
     })
     .catch(error=>{
        alert(error.message)
     })
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
                            <input name="password" type="password" className="input" placeholder="Password" required />
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