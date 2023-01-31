import React from "react";
import '../styles/Home.css';
import logo from '../assets/logo.png';
import Switch from "../components/Switch.jsx";
import { TypeAnimation } from 'react-type-animation';
const Home = () =>{
    return (
        <div className="home">
             <div className="autoPlay">
                <Switch></Switch>
             </div>
             <div className="start">
                <img src={logo} style={{width:'400px',height:'300px'}}></img><br/>
                <a href="/start">
                    <TypeAnimation
                        sequence={[
                            'START', // Types 'One'
                            10, // Waits 1s
                            () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em' }}
                    />
                </a>
             </div>
        </div>
    )
}

export default Home;