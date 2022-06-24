import "./CompanyDashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import tech from "../../imgs/techent.jpg";
import mental from "../../imgs/mental.png";
import company from "../../imgs/company.jpg";
import content from "../../imgs/content-enroll.png";
import accountCreate from "../../imgs/account-create.png";
import { Link } from "react-router-dom";

function CompanyDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>
        <div className="activities">
          <div className="tech">
            <Link to='/entreprenuer'>
              <img src={tech} alt="tech" />
            </Link>
            <h4>Entrepreneurship</h4>
          </div>
          <div className="mental">
            <img src={mental} alt="family" />
            <h4>Marketing strategies</h4>
          </div>
          <div className="company">
            <img src={company} alt="company" />
            <h4>Company</h4>
          </div>
        </div>

        <div className="recent-activities">
          <h3>Recent activities</h3>
          <table>
            <tr>
              <th>Action</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            <tr>
              <td className="action">
                <span>Login</span>
              </td>
              <td className="complete">complete</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
                <span>Account creation</span>
              </td>
              <td className="complete">complete</td>
              <td className="date">8/6/22</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
