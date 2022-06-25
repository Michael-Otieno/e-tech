import "./Subscribe.css";

import { Link } from "react-router-dom";

import logo from "../../imgs/investment.png";
import sub from "../../imgs/sub.jpg";

import HomeNav from "../homepage/HomeNav";

function Subscribe() {
  return (
    <div className="subscribe">
      <HomeNav />
      <div className="subscribe-review">
        <img src={sub} alt="" />
        <div className="subscribe-cond">
          <h2>Kindly review our terms and conditions before subscribing.</h2>
          <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
          
          <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
        </div>
      </div>
      <div className="subscribe-access">
        <h4>Subscribe and give your employees access to:</h4>
        <div className="sub">
          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Free</h2>
              <p></p>
            </div>

            <div className="submit">
              <ul className="subscribe-list">
                <li>Employee attend 1 major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can't ask questions or get reviews</li>
                <li>Employee can't take assessments</li>
              </ul>
              <Link to="/company-details">
                <input
                  className="subscribe-btn"
                  type="Submit"
                  value="Subscribe"
                />
              </Link>
            </div>
          </div>

          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Monthly</h2>
              <p></p>
            </div>

            <div className="submit">
              <ul className="subscribe-list">
                <li>Employee attend 1 major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can't ask questions or get reviews</li>
                <li>Employee can't take assessments</li>
              </ul>
              <Link to="">
                <input
                  className="subscribe-btn"
                  type="Submit"
                  value="Subscribe"
                />
              </Link>
            </div>
          </div>

          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Yearly</h2>
              <p></p>
            </div>

            <div className="submit">
              <ul className="subscribe-list">
                <li>Employee attend 1 major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can't ask questions or get reviews</li>
                <li>Employee can't take assessments</li>
              </ul>
              <Link to="/login">
                <input
                  className="subscribe-btn"
                  type="Submit"
                  value="Subscribe"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
