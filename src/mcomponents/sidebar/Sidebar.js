import "./Sidebar.css";

import logo from "../../imgs/investment.png";
import homeLight from "../../imgs/Home-light.png";
import history from "../../imgs/history.png";
import content from "../../imgs/content.png";
import tests from "../../imgs/tests.png";
import feedback from "../../imgs/feedback.png";
import certificates from "../../imgs/certificates.png";
import logout from "../../imgs/logout.png";
import mentorship from "../../imgs/summary.png";

import sessions from "../../imgs/sessions.png";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="homepage-navbar-logo">
          <img className="sidebar-logo" alt="logo" src={logo} />
          <h1>E-Tech</h1>
        </div>

        <ul>
          <li className="link-sidebar">
            <NavLink exact to="/dashboard" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={homeLight} />
              <p>Dashboard</p>
            </NavLink>
          </li>
          {/* <li className="link-sidebar">
            <NavLink to="/history" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={history} />
              <span>History</span>
            </NavLink>
          </li> */}

          <li className="link-sidebar">
            <NavLink to="/content" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={content} />
              <p>Content</p>
            </NavLink>
          </li>
          <li className="link-sidebar">
            <NavLink to="/trainings" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={sessions} />
              <p>Trainings</p>
            </NavLink>
          </li>
          <li className="link-sidebar">
            <NavLink to="/certification">
              <img className="sidebar-img" alt="home icon" src={tests} />
              <p>Certification</p>
            </NavLink>
          </li>
          <li className="link-sidebar">
            <NavLink to="/feedback" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={feedback} />
              <p>Feedback</p>
            </NavLink>
          </li>
          {/* <li className="link">
            <NavLink to="/certificates" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={certificates} />
              <span>Consultation</span>
            </NavLink>
          </li> */}
          <li className="link-sidebar">
            <NavLink to="/summary" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={mentorship} />
              <p>Summary</p>
            </NavLink>
          </li>

          <li className="link-sidebar">
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
