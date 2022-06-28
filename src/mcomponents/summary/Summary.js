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
              <p>You need to attend trainings and get certification to improve your skills. This will enable you In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.Lorem ipsum may be used as a placeholder before final copy is available </p>
            </div>
          </div>

          <div className="badge">
            <div className="badge-list">
              <h6>Badge</h6>
              <ul>
                <li>
                  <img src={red} alt="" />
                  <span>Average: &nbsp;</span>
                  <span>0 - 30 &nbsp; Need more practice</span>
                </li>
                <li>
                  <img src={yellow} alt="" />
                  <span>Good: &nbsp;</span>
                  <span>31 - 60 &nbsp; Take extra duties learned for practise</span>
                </li>
                <li>
                  <img src={green} alt="" />
                  <span>Exceptional:&nbsp;</span>
                  <span>61 - 100 &nbsp; You are confident handling extra duties. </span>
                </li>
              </ul>
            </div>
            <div  className="badge-activities">
              <h6>Badge</h6>
              <ul>
                <li>
                  <span>Content</span>
                  <img width='20' src={yellow} alt="" />
                </li>
                <li>
                  <span>Trainings</span>
                  <img width='20' src={red} alt='' />
                </li>
                <li>
                  <span>Certification</span>
                  <img width='20' src={red} alt='' />
                </li>
                <li>
                  <span>Feedback</span>
                  <img width='20' src={green} alt='' />
                </li>
                <li>
                  <span>Overall Badge</span>
                  <img width='20' src={yellow} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
