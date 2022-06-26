import "./Dashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import tech from "../../imgs/techent.jpg";
import mental from "../../imgs/mental.png";
import company from "../../imgs/company.jpg";
import content from "../../imgs/content-enroll.png";
import accountCreate from "../../imgs/account-create.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>
        <div className="activities">
          <div className="welcome">
            <h2>Welcome back,</h2>
            <div>
              <div className="welcome-cont">
                <h4>Continue reading</h4>
                <div className="welcome-img-link">
                  <img src={company} alt="company" />
                  <div className="welcome-cont-read">
                    <Link to="">
                      <h5>Scaling your start up.</h5>
                      <p>
                        We are somewhat accustomed to founders bigging up their
                        wins and spinning their losses, but such sins can
                        threaten to become whole-cloth heresies during a
                        downturn. Of course, it’s not all out of malice. For
                        decades, those within startup land have not been able to
                        agree on a definition for recapitalization or,
                        heck..........
                      </p>
                    </Link>
                    <span className="min-span">2min read. </span>
                    <span className="by-span">By e-tech.</span>
                    <span className="date-span">8/6/22</span>
                  </div>
                </div>
              </div>

              <div className="recent-activities">
                <h3>Subscription overview</h3>
                <table>
                  <tr>
                    <th>Subscription</th>
                    <th>Status</th>
                    <th>End Date</th>
                  </tr>
                  <tr>
                    <td className="action">
                      <span>Premium</span>
                    </td>
                    <td className="complete">active</td>
                    <td className="date">8/6/22</td>
                  </tr>
                  <tr>
                    <td className="action">
                      <span>Standard</span>
                    </td>
                    <td className="expired">expired</td>
                    <td className="date">8/6/22</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="recommended">
            <div>
              <h5>Recommended trainings</h5>
              <p className="recommend-trainings">None</p>
            </div>
            <div>
              <h5>Recommended certifications.</h5>
              <p className="recommend-trainings">None</p>
            </div>
            <div>
              <h5>Recommended articles</h5>
              <p className="recommend-trainings">None</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
