import React from "react";
import '../styles/Industry.css';
import Bfsi from "../assets/Industry/1.png";
import IOT from "../assets/Industry/2.png";
import Entertainment from "../assets/Industry/3.png";
import Education from "../assets/Industry/4.png";
import Government from "../assets/Industry/5.png";
import StartUp from "../assets/Industry/6.png";
import Logistic from "../assets/Industry/7.png";
import RealEstate from "../assets/Industry/8.png";
import Healthcare from "../assets/Industry/9.png";
import Pharmaceutical from "../assets/Industry/10.png";
import TravelAndFood from "../assets/Industry/11.png";
import Ecommerce from "../assets/Industry/12.png";
import Navigation from "./Navigation";
import Next from "./Next";

const Industry = () =>{
    return (
        <div className="industry">
            <Navigation content="INDUSTRY"></Navigation>
            <div className="list" >
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Bfsi}></img></div>
                    <div style={{marginTop:'30px'}}>BFSI</div>
                    </a>
                </div>
                
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={IOT}></img></div>
                    <div style={{marginTop:'30px'}}>IOT</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Entertainment}></img></div>
                    <div style={{marginTop:'30px'}}>ENTERTAINMENT</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Education}></img></div>
                    <div style={{marginTop:'30px'}}>EDUCATION</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Government}></img></div>
                    <div style={{marginTop:'30px'}}>GOVERNMENT</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={StartUp}></img></div>
                    <div style={{marginTop:'30px'}}>START-UP</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Logistic}></img></div>
                    <div style={{marginTop:'30px'}}>LOGISTIC</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={RealEstate}></img></div>
                    <div style={{marginTop:'30px'}}>REAL ESTATE</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Healthcare}></img></div>
                    <div style={{marginTop:'30px'}}>HEALTHCARE</div>
                    </a>
                </div>
            
                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Pharmaceutical}></img></div>
                    <div style={{marginTop:'30px'}}>PHARMACEUTICAL</div>
                    </a>
                </div>

                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={TravelAndFood}></img></div>
                    <div style={{marginTop:'30px'}}>TRAVEL & FOOD</div>
                    </a>
                </div>

                <div className="item">
                    <a href="/start/industry/bfsi">
                    <div className="icons"><img src={Ecommerce}></img></div>
                    <div style={{marginTop:'30px'}}>E-COMMERCE</div>
                    </a>
                </div>
                
            </div>
            <Next url={"1"}></Next>
        </div>
    )
}

export default Industry;