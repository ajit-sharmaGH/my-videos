import "./auth.css";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-theme-changer auth-container">
      <form className="flex-col-justify-center bg-theme-changer">
        <h2 className="flex-row-justify-center fw-800">Login Here</h2>
        <input
          type="text"
          placeholder="email@gmail.com"
          className="form-input" required
        />
        <input type="password" placeholder="password" className="form-input" required/>
        <button type="submit">Login</button>
        <div>Don't have A/c ? {">>>"} <Link to ="/signup" className="bg-theme-changer fw-600">Signup </Link></div>
      </form>
    </div>
  );
};
export { Login };
