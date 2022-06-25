import "./Homepage.css";
import logo from "../../imgs/investment.png";
import edigital from "../../imgs/edigital.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className='homepage-navbar-logo'>
          <img alt="" src={logo} />
          <h1>E-Tech</h1>
        </div>
        <div className='home-navbar-links'>
          <ul>
            <li>Why E-tech</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      <div className="digital">
        <div className="training">
          <h2>
            Training your employees made digital and interactive. Try out our
            website today for more amazing features and awesome content.
          </h2>
          <Link className="company-btn" to="/company-signup">
            <button>Company</button>
          </Link>
          <Link to="/signup">
            <button>Employee</button>
          </Link>
        </div>
        <img className="edigital" alt="" src={edigital} />
        <div></div>
      </div>
    </div>
  );
}
export default Homepage;
