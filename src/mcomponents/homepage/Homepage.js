import "./Homepage.css";
import logo from "../../imgs/investment.png";
import edigital from "../../imgs/edigital.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <img height="60" alt="" src={logo} />
        <div></div>
      </nav>
      <div className="digital">
        <div className="training">
          <h1>E- Tech</h1>
          <h2>
            Training your employees made digital and interactive. Try out our
            website today for more amazing features and awesome content.
          </h2>
          <Link to="/signup">
            <button>Get started</button>
          </Link>
        </div>
        <img className="edigital" alt="" src={edigital} />
      </div>
    </div>
  );
}
export default Homepage;
