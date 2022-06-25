import "./Subscribe.css";

import { Link } from "react-router-dom";

import logo from "../../imgs/investment.png";
import sub from "../../imgs/sub.jpg";

import HomeNav from '../homepage/HomeNav'

function Subscribe() {
  return (
    <div className="subscribe">
      <HomeNav/>
      <div className="subscribe-review">
        <img src={sub} alt='' />
        <div>
        <h2>Kindly review our terms and conditions before subscribing.</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
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
