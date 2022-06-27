import "./CompanySiderbar.css";

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

function CompanySidebar() {
  return (
    <div>
      <div className="sidebar">
        <img className="sidebar-logo" alt="logo" src={logo} />
        <ul>
          <li className="link-sidebar">
            <NavLink exact to="" activeClassName="active">
              <img className="sidebar-img" alt="home icon" src={homeLight} />
              <span>Dashboard</span>
            </NavLink>
            
          </li>
          <li  className="link-sidebar">
            
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
export default CompanySidebar;
