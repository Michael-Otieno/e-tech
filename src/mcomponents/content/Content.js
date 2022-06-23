import "./Content.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";
import complete from "../../imgs/complete.png";
import group from "../../imgs/group.png";
import company from "../../imgs/company.png";
import insurance from "../../imgs/insurance.png";
import news from "../../imgs/news.png";
import mental from "../../imgs/mental.png";

import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>

        <div className="content-activities">

          <div className="content-grid">
            <div className="content-grid-img">
              <Link to="/entreprenuer">
                <img className="tech-ent" src={complete} alt="" />
              </Link>
            </div>
            <h4>
              Entrepreneurship 50%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <Link to="">
              <img className="tech-ent" src={company} alt="" />
              </Link>
            </div>
            <h4>
              Trainings 20%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <Link to="">
              <img className="tech-ent" src={group} alt="" />
              </Link>
            </div>
            <h4>
              Leadership 80%
              <span>complete</span>
            </h4>
          </div>

          <div className="content-grid">
            <div className="content-grid-img">
              <Link to="">
              <img className="tech-ent" src={insurance} alt="" />
              </Link>
            </div>
            <h4>
              Tech Entrepreneurship 0%
              <span>complete</span>
            </h4>
          </div>
        </div>

        <div className="news">
        <div className="content-grid-img">
            <img src={mental} alt="" />
            <h4>Family & Mental Health</h4>
          </div>
          <img width="50%" src={news} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export default Content;
