import "./Feedback.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

function Feedback() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>
        <div className="feedback">
          <div>
            <h4>Kindly provide feedback below to help us improve.</h4>
            <textarea className="textarea"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
