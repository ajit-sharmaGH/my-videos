import "./auth.css";
import {Link} from "react-router-dom";
const Signup = ()=>{
    return (
        <div className="bg-theme-changer auth-container">
        <form className="flex-col-justify-center bg-theme-changer">
          <h2 className="flex-row-justify-center fw-800">Sign Up Form</h2>
          <input
            type="text"
            placeholder="first name"
            className="form-input" required
          />
          <input
            type="text"
            placeholder="last name"
            className="form-input" required
          />
          <input
            type="text"
            placeholder="email@gmail.com"
            className="form-input" required
          />
          <input type="password" placeholder="password" className="form-input" required/>
          <button type="submit">Signup</button>
          <div>Already have an A/c ? {">>>"} <Link to ="/login" className="bg-theme-changer fw-600">Login </Link></div>
        </form>
      </div>
    )
}
export {Signup};