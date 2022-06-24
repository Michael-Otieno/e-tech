import './Summary.css';

import Sidebar from "../sidebar/Sidebar";
import Userdetails from "../userdetails/Userdetails";

import {Bar} from 'react-chartjs-2';
import   {useState} from 'react';

import { Chart as ChartJS } from "chart.js/auto";
import {saveAs} from 'file-saver';

function Summary(){


  const [data, setData] = useState({
    labels: ['Content', 'Trainings', 'Certifications',
             ],
    datasets: [
      {
        label: '',
        backgroundColor: '#8A1A49',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  })


  
  return (
    <div className="dashboard">
    <Sidebar />
    <div className="content">
      <div className="content-header">
        <h2></h2>
        <Userdetails />
      </div>

      <div className="summary" id='summary'>
          <div className='summary-back'>
            <div className='graph'>
            <Bar
            data={data}
            options={{
              title:{
                display:true,
                text:'Performance',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}/>
            </div>
            <div className='graph-para'>
              <h4>Overall Remarks</h4>
              <p>
                I'm trying to download my chart.js charts as png using a button Onclick, but I have no idea how I'm going to achieve this , I've went through this answer React-chartjs-2 Doughnut chart export to png but it wasn't quite clear enough for me as I'm quite new in chart.js don't know how I'm going to connect those variables with my button.
              </p>

              <h4>Employee</h4>
              <p>
                I'm trying to download my chart.js charts as png using a button Onclick, but I have no idea how I'm going to achieve this , I've went through this answer React-chartjs-2 Doughnut chart export to png but it wasn't quite clear enough for me as I'm quite new in chart.js don't know how I'm going to connect those variables with my button.
              </p>
            </div>
          </div>
      </div>

    </div>
  </div>
  )
}

export default Summary;