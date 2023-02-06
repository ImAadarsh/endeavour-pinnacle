import React from "react";
import '../styles/PinnaclesSolutions.css';
import Discover from '../assets/Pinnacles/1.png';
import Connect from '../assets/Pinnacles/2.png';
import Engage from '../assets/Pinnacles/3.png';
import Navigation from "./Navigation";
import Next from "./Next";
const PinnaclesSolutions = () => {
    return (
        <div className="pinnaclesSolutions">
            <Navigation content={"Pinnacles Solutions"}></Navigation>
            <div className="list">
                <div className="item">
                    <div style={{fontSize : '30px'}}>D I S C O V E R</div> 
                    <div className="icons"><img src={Discover}></img></div>                   
                </div>
                <div className="item">
                    <div style={{fontSize : '30px'}}>C O N N E C T</div> 
                    <div className="icons"><img src={Connect}></img></div>                   
                </div>
                <div className="item">
                    <div style={{fontSize : '30px'}}>E N G A G E</div> 
                    <div className="icons"><img src={Engage}></img></div>                   
                </div>
            </div>
            <Next url={"4"}></Next>
        </div>
        
    )
}

export default PinnaclesSolutions;