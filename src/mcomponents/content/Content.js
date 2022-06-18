import "./Content.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";
import complete from "../../imgs/complete.png";
import group from "../../imgs/group.png";
import company from "../../imgs/company.png";
import insurance from "../../imgs/insurance.png";
import news from "../../imgs/news.png";
import mental from "../../imgs/mental.png";

function Content() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2>Content</h2>
          <Userdetails />
        </div>

        <div className="content-activities">
          <div className="content-grid">
            <div className="content-grid-img">
              <img src={complete} alt="" />
            </div>
            <h4>
              Entrepreneurship 50%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <img src={company} alt="" />
            </div>
            <h4>
              Company presentation 20%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <img src={group} alt="" />
            </div>
            <h4>
              Leadership 80%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <img src={insurance} alt="" />
            </div>
            <h4>
              Tech Entrepreneurship 0%
              <span>complete</span>
            </h4>
          </div>
        </div>
        <div className="news">
          <img width="50%" src={news} alt="" />
          <div className="content-grid-img">
            <img src={mental} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
