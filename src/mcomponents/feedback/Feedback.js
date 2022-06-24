import "./Feedback.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";
import feedback from "../../imgs/feedback.jpg";


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
          <div className="terms">
            <div>
              <h4>Terms and conditions</h4>
              <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
              </p>
              <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
              </p>
            </div>
            <div>
              <img src={feedback} />
            </div>
          </div>
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
