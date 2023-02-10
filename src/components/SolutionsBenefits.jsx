import React from "react";
import '../styles/SolutionsBenefits.css';
import icon1 from '../assets/SolutionBenefits/1.png';
import icon2 from '../assets/SolutionBenefits/2.png';
import icon3 from '../assets/SolutionBenefits/3.png';
import icon4 from '../assets/SolutionBenefits/4.png';
import Navigation from "./Navigation";
import Next from "./Next";

const SolutionsBenefits = () =>{
    return (
        <div className="solutionsBenefits">
            <Navigation content={"Solutions Benefits"}></Navigation>
            <div className="list">
               
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon1}></img></div>
                    <div className="content">
                        <p>Secure and Reliable Infrastructure for ALL Services</p>
                    </div>
                    
                </div>
                

                
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon2}></img></div>
                    <div className="content">
                        <p>Seamless Integration of Existing Application</p>
                    </div>
                </div>

            
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon3}></img></div>
                    <div className="content">
                        <p>Automated Customer Service with live Chat Connection</p>
                    </div>
                </div>

            
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon4}></img></div>
                    <div className="content">
                        <p>High ROI with 99.97%* Message Delivery Rate</p>
                    </div>
                </div>
               
            </div>
            <Next url={"6"}></Next>
        </div>
    )
}

export default SolutionsBenefits;