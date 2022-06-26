import './Certification.css';

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";
import management from "../../imgs/management.png";


function Certfication(){
  return (
  <div className="dashboard">
    <Sidebar />
    <div className="content">
      <div className="content-header">
        <h2></h2>
        <Userdetails />
      </div>

      <div className="certification">
          <div className='cert-training'>
            <img src={management} alt='' />
            <h4>Management consultants</h4>
            <p>Management training test</p>
            <p>9:00pm - 10:00</p>
            <button>Read training details</button>
          </div>

          <div className='cert-training'>
            <img src={management} alt='' />
            <h4>Management consultants</h4>
            <p>Ethics training exam</p>
            <p>9:00pm - 10:00</p>
            <button>Read training details</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Certfication;

