import './Trainings.css';

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";


function Trainings(){
  return (
    <div className="dashboard">
    <Sidebar />
    <div className="content">
      <div className="content-header">
        <h2></h2>
        <Userdetails />
      </div>

      <div className="recent-activities-history">
        <div></div>
      </div>

    </div>
  </div>
  )
}
export default Trainings;