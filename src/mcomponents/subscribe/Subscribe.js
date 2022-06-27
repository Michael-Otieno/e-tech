import "./Subscribe.css";

import { Link } from "react-router-dom";

import logo from "../../imgs/investment.png";
import sub from "../../imgs/sub.png";

import HomeNav from "../homepage/HomeNav";

function Subscribe() {
  return (
    <div className="subscribe">
      <HomeNav />
      <div className="subscribe-access">
        <div className="sub">
          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Free</h2>
              <p></p>
            </div>

            <div className="subscribe-list">
              <div className="subscribe-img">
                <img src={sub} alt="" />
              </div>
              <ul>
                <li>Employee attend 1 major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can't ask questions or get reviews</li>
                <li>Employee can't take assessments</li>
              </ul>
              <div className="sub-btn">
                <Link to="/company-details">
                  <input
                    className="subscribe-btn"
                    type="Submit"
                    value="Subscribe"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Monthly</h2>
              <p></p>
            </div>
            <div className="subscribe-list">
              <div className="subscribe-img">
                <img src={sub} alt="" />
              </div>
              <ul>
                <li>Employee attend 20 major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can ask questions and get reviews</li>
                <li>Employee can take assessments</li>
              </ul>
              <div className="sub-btn">
                <Link to="">
                  <input
                    className="subscribe-btn"
                    type="Submit"
                    value="Subscribe"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="sub-form">
            <div className="form-logo">
              <img className="signup-img" src={logo} alt="" />
              <h2>Yearly</h2>
              <p></p>
            </div>

            <div className="subscribe-list">
              <div className="subscribe-img">
                <img src={sub} alt="" />
              </div>
              <ul>
                <li>Employee attend any major training per year</li>
                <li>Employee can read all articles</li>
                <li>Employee can ask questions and get reviews</li>
                <li>Employee can take any assessments</li>
              </ul>
              <div className="sub-btn">
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
    </div>
  );
}
export default Subscribe;
