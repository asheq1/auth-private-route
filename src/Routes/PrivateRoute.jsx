import { useContext } from "react";
import { Auth } from "../Providers/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Auth);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;