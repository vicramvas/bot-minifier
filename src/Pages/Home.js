import React from 'react';
import { LineChart } from '../Components/Charts/LineChart';
import { PolarAreaChart } from '../Components/Charts/PolarAreaChart';
import { RadarChart } from '../Components/Charts/RadarChart';
import { DoughnutChart } from '../Components/Charts/DoughnutChart'

const Home = () => {
    return(
        <section className="row">
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

export default Home;
