import "./auth.css";
import { useLocation, useNavigate,  } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
const Login = () => {
  const { login, setLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
 
  return (
    <div className="bg-theme-changer auth-container">
      {login ? (
        <button onClick={() => setLogin((login) => !login)}>
          {login ? (
            "logout"
          ) : (
            ""
          )}
        </button>
      ) : (
        <center className="flex-col-justify-center bg-theme-changer">
              <h2 className="flex-row-justify-center fw-800">Click below to Login </h2>
              
              <button onClick={() => {setLogin((login) => !login)
              navigate(location?.state?.from?.pathname || "/video-listing-page", {replace: true})}}>
                {" "}
                {login ? "logout" : "login"}
              </button>
              
            </center>
      )}
    </div>
  );
};
export { Login };
