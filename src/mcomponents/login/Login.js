import { Link } from "react-router-dom";

// import errorIcon from "../../imgs/error.png";
import nextIcon from "../../imgs/next.png";
import signupIcon from "../../imgs/signup.png";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-div">
        <div>
          <h2>Sign in</h2>
          <form>
            <input type="email" placeholder="email" />
            <br />
            <input type="password" placeholder="password" />
            <br />

            {/* <p className="error-icon-para">
            <img className="error-icon" src={errorIcon} alt="" />
            <span>reply with your correct company name</span>
          </p> */}
          </form>

          <button className="nextIcon">
            <Link to="/login">
              <img className="next-btn" alt="next button" src={nextIcon} />
            </Link>
          </button>
        </div>
      </div>

      <div className="e-tech-img">
        <img className="login-img" src={signupIcon} alt="login up" />
      </div>
    </div>
  );
}
export default Login;
