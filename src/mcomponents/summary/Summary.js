import "./Summary.css";

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import { Line } from "react-chartjs-2";
import { useState } from "react";

import { Chart as ChartJS } from "chart.js/auto";
import { saveAs } from "file-saver";

import red from "../../imgs/red.png";
import green from "../../imgs/green.png";
import yellow from "../../imgs/yellow.png";

function Summary() {
  const [data, setData] = useState({
    labels: ["", "Content", "Trainings", "Certification", "Feedback"],
    datasets: [
      {
        label: "Check badge meaning for performance rating",
        backgroundColor: "#8A1A49",
        borderColor: "#DF5753",
        borderWidth: 1,
        data: [0, 50, 30, 10, 30, 100],
      },
    ],
  });

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="content-header">
          <h2></h2>
          <Userdetails />
        </div>
        <div className="summary">
          <div className="summary-graph">
            <div className="graph">
              <Line
                data={data}
                options={{
                  title: {
                    display: true,
                    text: "Performance",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
            <div className="abilities">
              <h6>Your overall abilities</h6>
              <p></p>
            </div>
          </div>

          <div className="badge">
            <div className="badge-list">
              <h6>Badge</h6>
              <ul>
                <li>
                  <img src={red} alt="" />
                  <span>Average:</span>
                  <span></span>
                </li>
                <li>
                  <img src={yellow} alt="" />
                  <span>Good:</span>
                  <span></span>
                </li>
                <li>
                  <img src={green} alt="" />
                  <span>Exceptional:</span>
                  <span></span>
                </li>
              </ul>
            </div>
            <div  className="badge-activities">
              <h6>BADGE</h6>
              <ul>
                <li>Content</li>
                <li>Trainings</li>
                <li>Certification</li>
                <li>Feedback</li>
                <li>Overall Badge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
