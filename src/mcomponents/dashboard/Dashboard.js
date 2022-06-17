import "./Dashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import tech from "../../imgs/techent.png";
import mental from "../../imgs/mental.png";
import company from "../../imgs/company.png";
import content from "../../imgs/content-enroll.png";
import accountCreate from "../../imgs/account-create.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2>My Recent Content</h2>
          <Userdetails />
        </div>
        <div className="activities">
          <div className="tech">
            <img src={tech} alt="tech" />
            <h4>Entrepreneurship</h4>
          </div>
          <div className="mental">
            <img src={mental} alt="family" />
            <h4>Family & Mental Health</h4>
          </div>
          <div className="company">
            <img width="30%" src={company} alt="company" />
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
                <img src={content} alt="content" />
                <span>Content enrollment</span>
              </td>
              <td className="complete">complete</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
              <img src={accountCreate} alt="content" />
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

export default Dashboard;
