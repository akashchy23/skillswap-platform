import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const location = useLocation()
    console.log(location)
    const { user } = use(AuthContext);
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRouter;