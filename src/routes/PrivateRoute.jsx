import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;