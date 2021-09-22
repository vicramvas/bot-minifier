import React from 'react';
import axios from 'axios';
import { LineChart } from '../Components/Charts/LineChart';
import { PolarAreaChart } from '../Components/Charts/PolarAreaChart';
import { RadarChart } from '../Components/Charts/RadarChart';
import { DoughnutChart } from '../Components/Charts/DoughnutChart'

const covidURL = 'https://data.covid19india.org/v4/min/timeseries.min.json'
const Home = () => {

    const [covStatus, setStatus]= React.useState(null);

    React.useEffect(()=>{
        axios.get(covidURL).then((response)=>{
            setStatus(response.data)
        });
    },[]);
    if(!covStatus) return null;
    console.log(covStatus);
    return(
        <section className="row">
            <div className='col-6 card'>
            <h1>Chart</h1>
                <LineChart data={covStatus}/>
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
