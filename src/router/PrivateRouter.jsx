import { useContext } from "react";
import  AuthContext  from "../Context/AuthContext/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user) {
        return children;
    }
    return <Navigate to="/login" state = { location?.pathname}> </Navigate> 
};

export default PrivateRouter;