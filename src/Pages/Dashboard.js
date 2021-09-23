import React from 'react';
import { LineChart } from '../Components/Charts/LineChart';
import { PolarAreaChart } from '../Components/Charts/PolarAreaChart';
import { RadarChart } from '../Components/Charts/RadarChart';
import { DoughnutChart } from '../Components/Charts/DoughnutChart'

import { SideBar } from '../Components/SideBar';

const Dashboard = () => {
    return(
        <section className="row">
            <div className="col-2">
              <SideBar/>
          </div>
            <div className='col-6 card'>
            <h1>Chart</h1>
                <LineChart/>
            </div>
             <div className='col-6 card'>
             <h1>Chart</h1>
                <PolarAreaChart/>
            </div>
             <div className='col-6 card'>
             <h1>Chart</h1>
                <RadarChart/>
            </div>
             <div className='col-6 card'>
             <h1>Chart</h1>
                <DoughnutChart/>
            </div>
        </section>
    )
}

export default Dashboard;
