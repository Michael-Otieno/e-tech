import './Summary.css';

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";




function Summary(){
  return (
    <div className="dashboard">
    <Sidebar />
    <div className="content">
      <div className="content-header">
        <h2></h2>
        <Userdetails />
      </div>

      <div className="recent-activities-history">
          
        </div>

    </div>
  </div>
  )
}

export default Summary;