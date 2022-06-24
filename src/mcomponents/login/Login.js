import { Link } from "react-router-dom";
import logo from "../../imgs/investment.png";

// import errorIcon from "../../imgs/error.png";
// import nextIcon from "../../imgs/next.png";
import signupIcon from "../../imgs/signup.png";

import "./Login.css";

function Login() {
  return (
    <div className="signup login">
      <div className="form">
        <div className="form-logo">
          <img className="signup-img" src={logo} alt="" />
          <h2>Sign In</h2>
          <p></p>
        </div>
        <form>
          <label>Email: </label>
          <br />
          <input className="input" type="email" required />
          <br />
        
          <br />
          <label>Password: </label>
          <br />
          <input className="input" type="password" required />
          <br />
        </form>
        <div className="submit">
          <Link to="/dashboard">
            <input type="Submit" value="Sign in" />
          </Link>
          <p>
            <span>Don't have an account?</span>
            <Link className="link" to="/signup">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="e-tech-img">
        <img src={signupIcon} alt="sign up" />
      </div>
    </div>
  );
}
export default Login;
