import { Link } from "react-router-dom";

import "./Signup.css";
import logo from "../../imgs/investment.png";
import signupIcon from "../../imgs/signup.png";

function Signup() {
  
  return (
    <div className="signup">
      <div className="form">
        <div className="form-logo">
          <img width="40" src={logo} alt="" />
          <h2>Sign up</h2>
          <p></p>
        </div>
        <form>
          <label>Name: </label>
          <br />
          <input className="input" type="text" required />
          <br />
          <label>Email: </label>
          <br />
          <input className="input" type="email" required />
          <br />
          <label>Company: </label>
          <br />
          <input className="input" type="text" required />
          <br />
          <label>Email: </label>
          <br />
          <input className="input" type="password" required />
          <br />
        </form>
        <div className="submit">
          <Link to="/login">
            <input type="Submit" value="Sign up" />
          </Link>
          <p>
            <span>Already signed up?</span>
            <Link className="link" to="/login">Log in</Link>
          </p>
        </div>
      </div>

      <div className="e-tech-img">
        <img src={signupIcon} alt="sign up" />
      </div>
    </div>
  );
}
export default Signup;
