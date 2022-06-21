import { Link } from "react-router-dom";

import "./Signup.css";
// import errorIcon from "../../imgs/error.png";
import nextIcon from "../../imgs/next.png";
import signupIcon from "../../imgs/signup.png";

function Signup() {
  return (
    <div className="signup">
      <div>
        <h2>Sign up</h2>
        <form >
          <input type="text" placeholder="Username" required />
          <br />
          <input type="email" placeholder="email" required />
          <br />
          <input type="password" placeholder="password" required />
          <br />
          <input type="text" placeholder="company name" required />
          {/* <p className="error-icon-para">
            <img className="error-icon" src={errorIcon} alt="" />
            <span>reply with your correct company name</span>
          </p> */}
           <button className="nextIcon">
          <Link to="/login">
            <img alt="next button" src={nextIcon} />
          </Link>
          
        </button>
        </form>

       
      </div>

      <div className="e-tech-img">
        <img src={signupIcon} alt="sign up" />
      </div>
    </div>
  );
}
export default Signup;
