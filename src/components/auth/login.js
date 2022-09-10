import "./auth.css";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
const Login = () => {
  const { login, setLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log({location})
  // console.log(location.state.from.pathname);
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
              <h2 className="flex-row-justify-center fw-800">Login Here</h2>
              <input
                type="text"
                value={"frontenddeveloper@gmail.com"}
                placeholder="email@gmail.com"
                className="form-input"
              />
              <input
                type="password"
                value={"ajitSharma180"}
                placeholder="password"
                className="form-input"
              />
              <button onClick={() => {setLogin((login) => !login)
              navigate(location?.state?.from?.pathname || "/video-listing-page", {replace: true})}}>
                {" "}
                {login ? "logout" : "login"}
              </button>
              <div>
                Don't have A/c ? {">>>"}{" "}
                <Link to="/signup" className="bg-theme-changer fw-600">
                  Signup{" "}
                </Link>
              </div>
            </center>
      )}
    </div>
  );
};
export { Login };
