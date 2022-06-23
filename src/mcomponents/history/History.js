import './History.css';

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";


function History(){
  return (
    <div className="dashboard">
    <Sidebar />
    <div className="content">
      <div className="content-header">
        <h2></h2>
        <Userdetails />
      </div>

      <div className="recent-activities-history">
          <h3>Recent activities</h3>
          <table>
            <tr>
              <th>Action</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
            <tr>
              <td className="action">
                Content enrollment
              </td>
              <td className="complete">Complete</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
                Posted feedback
              </td>
              <td className="complete">Received</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
                Login
              </td>
              <td className="complete">Complete</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
                Email Verification
              </td>
              <td className="complete">Complete</td>
              <td className="date">8/6/22</td>
            </tr>
            <tr>
              <td className="action">
                Test 1 attempt
              </td>
              <td className="complete">Complete</td>
              <td className="date">8/6/22</td>
            </tr>
            
          </table>
        </div>

    </div>
  </div>
  )
}

export default History;

