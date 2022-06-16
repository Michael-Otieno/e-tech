import "./Homepage.css";
import logo from "../../imgs/e-icon.png";

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
      <div>
        <p>
          Training your employees made digital and interactive. Try out our
          website today for more amazing features and awesome content.
          <br />
          <button>Get started</button>
        </p>
        <img />
      </div>
    </div>
  );
}
export default Homepage;
