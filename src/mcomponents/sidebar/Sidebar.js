
import './Sidebar.css';

import logo from "../../imgs/e-icon.png";
import homeLight from "../../imgs/Home-light.png";
import history from "../../imgs/history.png";
import content from "../../imgs/content.png";
import tests from "../../imgs/tests.png";
import feedback from "../../imgs/feedback.png";
import certificates from "../../imgs/certificates.png";
import logout from "../../imgs/logout.png";
import mentorship from "../../imgs/mentorships.png";

import { Link } from "react-router-dom";



function Sidebar(){
  return (
    <div>
      <div className="sidebar">
        <img className="sidebar-logo" alt="logo" src={logo} />
        <ul>
          <li className="back">
            <img className="sidebar-img" alt="home icon" src={homeLight} />
            <Link className="link" to="/dashboard">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={history} />
            <Link className="link" to="/history">
              History
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={content} />
            <Link className="link" to="/content">
              Content
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={tests} />
            <Link className="link" to="/test">
              Test
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={feedback} />
            <Link className="link" to="/feedback">
              Feedback
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={certificates} />
            <Link className="link" to="/certificates">
              Certificates
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={mentorship} />
            <Link className="link" to="/mentorship">
              Mentorship
            </Link>
          </li>
          <li>
            <img className="sidebar-img" alt="home icon" src={logout} />
            <Link className="link" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;