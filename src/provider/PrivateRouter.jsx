import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user } = use(AuthContext);
    if(user){
        return children
    }
    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRouter;