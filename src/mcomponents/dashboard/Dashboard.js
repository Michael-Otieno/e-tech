import "./Dashboard.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2>My Recent Content</h2>
          <Userdetails/>
        </div>

        <p>
          lorem 10
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
