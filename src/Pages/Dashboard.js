import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart } from '../Components/Charts/LineChart';
import { PolarAreaChart } from '../Components/Charts/PolarAreaChart';
import { RadarChart } from '../Components/Charts/RadarChart';
import { DoughnutChart } from '../Components/Charts/DoughnutChart'
import { useHistory } from 'react-router';
import { NavArea } from '../Components/NavArea';
const covidURL = 'https://data.covid19india.org/v4/min/timeseries.min.json'
const Home = () => {
    const [covStatus, setStatus] = useState(null);
    useEffect(() => {
        axios.get(covidURL).then((response) => {
            setStatus(response.data)
        });
    }, []);
    if (!covStatus) return null;
    return ( <section className="row">
        <section className="row">
            <article className="col-10">
                <article className="row">
                <div className='col-6 card'>
                    <h1>Covid-19 Data</h1>
                    <LineChart data={covStatus} />
                </div>
                <div className='col-6 card'>
                    <h1>Chart</h1>
                    <PolarAreaChart />
                </div>
                <div className='col-6 card'>
                    <h1>Chart</h1>
                    <RadarChart />
                </div>
                <div className='col-6 card'>
                    <h1>Chart</h1>
                    <DoughnutChart />
                </div>
                </article>
            </article>
        </section>
        </section>
    )
}

export default Home;
