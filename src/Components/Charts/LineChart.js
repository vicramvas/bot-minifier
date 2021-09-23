import React from "react";
import { Line } from 'react-chartjs-2';
import * as Utils from './Utils';

export const LineChart = (props) => {
  
  let Tndates=[],DlDates = []
  let FinalDates,finalDates2;
  if(props){
    
    Object.keys(props.data.TN.dates).forEach((key)=>{
  Tndates.push({date:key, value:props.data.TN.dates[key].delta && props.data.TN.dates[key].delta.confirmed || 0});
  DlDates.push({date:key, value:props.data.HR.dates[key].delta && props.data.HR.dates[key].delta.confirmed || 0})
    })
    FinalDates= Tndates.reverse().splice(0,10)
    finalDates2= DlDates.reverse().splice(0,10)
    
  
}
    const labels = Utils.months({count: 7});
    const data = {
      labels: FinalDates.reduce((acc,cur)=>{acc.push(cur.date); return acc},[]).reverse(),
     
      options: {
        plugins: {
          title: {
            text: 'Last 10 days Covid-positive Count',
            display: true
          }
        }
      },
         scales: {
        x: {
          type: 'time',
          time: {
            // Luxon format string
            tooltipFormat: 'DD T'
          },
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'value'
          }
        }
      },
      datasets: [{
        label: 'TamilNadu',
        data: FinalDates.reduce((acc,cur)=>{acc.push(cur.value); return acc},[]).reverse(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      // {
      //   label: 'Haryana',
      //   data: DlDates.reduce((acc,cur)=>{acc.push(cur.value); return acc},[]).reverse(),
      //   borderColor: 'rgb(75, 192, 192)',
      //   backgroundColor: 'red',
      // }
      ]
    };
    return (
        <div>
            <Line data={data} />
        </div>
    )
}