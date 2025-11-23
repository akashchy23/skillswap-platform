import React, { use } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const ForgetPassword = () => {
    const { email } = useParams()
    const { forgetPassword } = use(AuthContext)
    const navigate=useNavigate()
    const handleReset = (e) => {
        e.preventDefault()
        // console.log("clicked")
        forgetPassword()
        forgetPassword(email)
            .then(() => {
                alert("Please cheak your email");
                navigate("/auth/login")
            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
                    <form onSubmit={handleReset}>
                        <label className="label">Email</label>
                        <input defaultValue={email} name="email" type="email" className="input" placeholder="Email" />
                        <button className="btn btn-neutral mt-4 w-full">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;