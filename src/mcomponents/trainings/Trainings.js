import "./Trainings.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

function Trainings() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>

        <div className="trainings">
          <div className="all-trainings">
            <div className="company-training">
              <h3>Company Trainings</h3>
              <ul>
                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time">Start: 9:00pm - Stop: 10:00</span>
                </li>
              </ul>
            </div>

            <div className="company-training">
              <h3>General Trainings</h3>
              <ul>
                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time">Start: 9:00pm - Stop: 10:00</span>
                </li>
                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time">Start: 9:00pm - Stop: 10:00</span>
                </li>
              </ul>
            </div>

            <div className="ended-training">
              <h3>Trainings Ended</h3>
              <ul>
                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time-end">Started: 9:00pm - Stop: 10:00</span>
                </li>

                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time-end">Started: 8:00pm - Stop: 9:00pm</span>
                </li>

                <li>
                  <span>Management training by vision consultants</span><br/>
                  <span className="time-end">Started: 4:00pm - Stop: 5:00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trainings;
