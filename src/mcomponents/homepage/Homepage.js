import "./Homepage.css";
import logo from "../../imgs/e-icon.png";
import edigital from "../../imgs/edigital.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} />
        <ul>
          <li>Home</li>
          <li>What we do</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="digital">
        <p>
          Training your employees made digital and interactive. Try out our
          website today for more amazing features and awesome content.
          <br />
          <Link to='/signup'>
            <button>Get started</button>
          </Link>
        </p>
        <img src={edigital} />
      </div>
    </div>
  );
}
export default Homepage;
