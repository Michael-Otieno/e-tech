import "./Homepage.css";
import "./HomeNav"
import edigital from "../../imgs/edigital.png";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";

function Homepage() {
  return (
    <div className="homepage">
      <HomeNav/>
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
