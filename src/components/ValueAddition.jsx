import React from "react";
import '../styles/ValueAddition.css';
import icon1 from '../assets/ValueAddition/1.png';
import icon2 from '../assets/ValueAddition/2.png';
import icon3 from '../assets/ValueAddition/3.png';
import icon4 from '../assets/ValueAddition/4.png';
import Navigation from "./Navigation";
import Next from "./Next";

const ValueAddition = () =>{
    return (
        <div className="valueAddition">
            <Navigation content={"Value Addition"}></Navigation>
            <div className="list">
               
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon1}></img></div>
                    <div style={{fontWeight :'bold',fontSize : '25px'}}>Innovative Modules</div>
                </div>
                

                
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon2}></img></div>
                    <div style={{fontWeight :'bold',fontSize : '25px'}}>Global reach</div>
                </div>

            
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon3}></img></div>
                    <div style={{fontWeight :'bold',fontSize : '25px'}}>Better, Faster & Cost-Effective</div>
                </div>

            
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon4}></img></div>
                    <div style={{fontWeight :'bold',fontSize : '25px'}}>Quality Infrastructure</div>
                </div>
               
            </div>
            <Next url={"7"}></Next>
        </div>
    )
}

export default ValueAddition;