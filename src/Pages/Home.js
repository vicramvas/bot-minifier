import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
const Home = () => {
    const history = useHistory();
    const redirectToDashboard = () => {
        history.push('/dashboard');
    }
    return (
        <section className="row bg">
            <div className="main-wrapper">
                <h1>Hackathon - Bot Minifiers</h1>
                <Button variant="contained" onClick={redirectToDashboard}>Launch Application</Button>
            </div>
        </section>
    )
}

export default Home;
