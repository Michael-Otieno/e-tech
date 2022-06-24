import { Link } from "react-router-dom";

import "./CompanyDetails.css";
import logo from "../../imgs/investment.png";
import signupIcon from "../../imgs/signup.png";

function CompanyDetails() {
  
  return (
    <div className="signup">
      <div className="form">
        <div className="form-logo">
          <img className="signup-img" src={logo} alt="" />
          <h2>Sign up</h2>
          <p></p>
        </div>
        <form>
          <label>Company Name: </label>
          <br />
          <input className="input" type="text" required />
          <br />
          <label>Email: </label>
          <br />
          <input className="input" type="email" required />
          <br />
          <label>Business category: </label>
          <br />
          <input className="input" type="text" required />
          <br />
          <label>Password: </label>
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
export default CompanyDetails;
