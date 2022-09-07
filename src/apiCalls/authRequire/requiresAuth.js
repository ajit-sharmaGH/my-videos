import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../context/authContext/authContext";
const RequireAuth = ({children})=>{
    let location = useLocation();
    const {login} = useAuth();
    // console.log(location);
    return login ? children : <Navigate to="/login" state={{from : location}} replace />
}
export {RequireAuth};