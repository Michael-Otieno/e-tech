import "./Sidebar.css";

import logo from "../../imgs/e-icon.png";
import homeLight from "../../imgs/Home-light.png";
import history from "../../imgs/history.png";
import content from "../../imgs/content.png";
import tests from "../../imgs/tests.png";
import feedback from "../../imgs/feedback.png";
import certificates from "../../imgs/certificates.png";
import logout from "../../imgs/logout.png";
import mentorship from "../../imgs/mentorships.png";

import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <img className="sidebar-logo" alt="logo" src={logo} />
        <ul>
          <li className="link">
            <NavLink exact to="/dashboard" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={homeLight} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/history" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={history} />
              <span>History</span>
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/content" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={content} />
              <span>Content</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/test">
              <img className="sidebar-img" alt="home icon" src={tests} />
              <span>Tests</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/feedback" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={feedback} />
              <span>Feedback</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/certificates" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={certificates} />
              <span>Certification</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/mentorship" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={mentorship} />
              <span>Consultation</span>
            </NavLink>
          </li>

          <li  className="link">
            
            <NavLink to="/">
            <img className="sidebar-img" alt="home icon" src={logout} />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
