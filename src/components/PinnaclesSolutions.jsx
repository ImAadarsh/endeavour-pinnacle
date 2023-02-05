import React from "react";
import '../styles/PinnaclesSolutions.css';
import Logo from './Logo';
import Sms from '../assets/Product/1.png';
import Email from '../assets/Product/2.png';
import WhatsApp from '../assets/Product/3.png';
import Voice from '../assets/Product/4.png';
import Discover from '../assets/Pinnacles/1.png';
import Connect from '../assets/Pinnacles/2.png';
import Engage from '../assets/Pinnacles/3.png';
const PinnaclesSolutions = () => {
    return (
        <div className="pinnaclesSolutions">
            <Logo></Logo>
            <div className="header">
               <h2>Pinnacles Solutions</h2>
            </div>
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
        </div>
        
    )
}

export default PinnaclesSolutions;