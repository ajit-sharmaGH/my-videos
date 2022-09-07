import "./auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";
const Signup = () => {
  const { login, setLogin } = useAuth();
  return (
    <div className="bg-theme-changer auth-container">
      {login ? (
        <button>
          {login ? "Sign UP Successful" : ""}{" "}
        </button>
      ) : (
        <center className="flex-col-justify-center bg-theme-changer">
          <h2 className="flex-row-justify-center fw-800">Sign Up Form</h2>
          <input
            type="text"
            value={"Ajit"}
            placeholder="first name"
            className="form-input"
            required
          />
          <input
            type="text"
            value={"Sharma"}
            placeholder="last name"
            className="form-input"
            required
          />
          <input
            type="text"
            value={"ajitsharma@gmail.com"}
            placeholder="email@gmail.com"
            className="form-input"
            required
          />
          <input
            type="password"
            value={"ajitSharma420"}
            placeholder="password"
            className="form-input"
            required
          />
          <button onClick={() => setLogin((login) => !login)}>
            {" "}
            {login ? "Signed Up" : "Sign In"}{" "}
          </button>
          <div>
            Already have an A/c ? {">>>"}{" "}
            <Link to="/login" className="bg-theme-changer fw-600">
              Login{" "}
            </Link>
          </div>
        </center>
      )}
    </div>
  );
};
export { Signup };
