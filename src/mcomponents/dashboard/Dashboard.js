
import "./Dashboard.css";


import Sidebar from "../sidebar/Sidebar"; 


function Dashboard() {
  return (
    <div className="dashboard">
      
      <Sidebar />
      <div className="content">
        <h2>My Recent Content</h2>
      </div>
    </div>
  );
}

export default Dashboard;
