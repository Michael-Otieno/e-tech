import "./CompanyDashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import CompanySidebar from "../companySidebar/CompanySidebar";

import tech from "../../imgs/techent.jpg";
import mental from "../../imgs/mental.png";
import company from "../../imgs/company.jpg";
import content from "../../imgs/content-enroll.png";
import accountCreate from "../../imgs/account-create.png";
import { Link } from "react-router-dom";
import CompanyProfile from "../companyprofile/CompanyProfile";

function CompanyDashboard() {
  return (
    <div className="dashboard">
      <CompanySidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <CompanyProfile />
        </div>
        <div className="company-activities">
          <div className="company-activities-form">
            <h4>Request Training / Give Feedback</h4>
            <textarea className="company-textarea"></textarea>
            <br />
            <button className="company-feedback-btn">Submit</button>
          </div>
          <div className="employee-list">
            <h4>Check employee stats</h4>
            <div className="add">
              <button>
                Upload excel containing employee name and email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
