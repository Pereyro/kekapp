import React from "react";
import { Navigate} from 'react-router-dom';
import { useAuth } from '../auth';

const PrivateRoute = ({element}) => {
    const { isAuthentificated } = useAuth();

    return isAuthentificated ? (
        element
    ) : (
        <Navigate to="/login" />
    );

};

export default PrivateRoute;