import "./Trainings.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

// import back from "../../imgs/Back.png";
import management from "../../imgs/management.png";

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
          {/* <div className='trainings-lessons'>
          <div className="trainings-btn">
            <button>All trainings</button>
            <button>Management</button>
            <button>Ethics</button>
            <button>Legal compliance</button>
            <button>Mentorship</button>
            <img src={back} alt="" />
          </div>
         </div> */}
          <div className="trainings-scheduled">

            {/* <div className="certification"> */}

              <div className="cert-training">
                <img src={management} alt="" />
                <h4>Management consultants</h4>
                <p>Management training test</p>
                <p>9:00pm - 10:00</p>
                <button>Read training details</button>
              </div>

              <div className="cert-training">
                <img src={management} alt="" />
                <h4>Management consultants</h4>
                <p>Ethics training exam</p>
                <p>9:00pm - 10:00</p>
                <button>Read training details</button>
              </div>
              <div className="cert-training">
                <img src={management} alt="" />
                <h4>Management consultants</h4>
                <p>Ethics training exam</p>
                <p>9:00pm - 10:00</p>
                <button>Read training details</button>
              </div>
              <div className="cert-training">
                <img src={management} alt="" />
                <h4>Management consultants</h4>
                <p>Ethics training exam</p>
                <p>9:00pm - 10:00</p>
                <button>Read training details</button>
              </div>

            {/* </div> */}

          </div>
          <div className="scheduled">
            <div className="company-scheduled">
              <h4>Company scheduled trainings</h4>
              <div>
                <p>Management training by e-tech consultants</p>
                <p>Start:9:00pm - Stop: 10:00pm</p>
                <button>Set training reminder</button>
              </div>
            </div>

            <div className="trainings-ended">
              <h4>Trainings ended</h4>
              <div>
                <p>Management training by e-tech consultants</p>
                <p>Start:9:00pm - Stop: 10:00pm</p>
                <button>Listen to recording </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trainings;
