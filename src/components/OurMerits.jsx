import React from "react";
import '../styles/OurMerits.css';
import icon1 from '../assets/Merits/1.png';
import icon2 from '../assets/Merits/2.png';
import icon3 from '../assets/Merits/3.png';
import icon4 from '../assets/Merits/4.png';
import icon5 from '../assets/Merits/5.png';
import icon6 from '../assets/Merits/6.png';
import icon7 from '../assets/Merits/7.png';
import icon8 from '../assets/Merits/8.png';
import icon9 from '../assets/Merits/9.png';
import icon10 from '../assets/Merits/10.png';
import icon11 from '../assets/Merits/11.png';
import Navigation from "./Navigation";
import Next from "./Next";

const OurMerits = () =>{
    return (
        <div className="ourMerits">
            <Navigation content={"Our Merits"}></Navigation>
            <div className="list">            
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon1}></img></div>
                    <div style={{fontWeight :'bold'}}>19 Years</div>
                    <div className="content">
                        <p>Of learning as a marketer</p>
                    </div> 
                </div>              
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon2}></img></div>
                    <div style={{fontWeight :'bold'}}>6000+</div>
                    <div className="content">
                        <p>Satisfied</p>
                    </div>
                </div>        
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon3}></img></div>
                    <div style={{fontWeight :'bold'}}>75 Billion +</div>
                    <div className="content">
                        <p>Text delivering capacity / year</p>
                    </div>
                </div>
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon5}></img></div>
                    <div style={{fontWeight :'bold'}}>100+</div>
                    <div className="content">
                        <p>Channel Partners</p>
                    </div>
                </div>      
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon4}></img></div>
                    <div style={{fontWeight :'bold'}}>99.99%</div>
                    <div className="content">
                        <p>API Uptime</p>
                    </div>
                </div>            
            </div>
            <div className="list">
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon6} style={{width:'130px',height:'150px'}}></img></div>                    
                </div>
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon7} style={{width:'130px',height:'150px'}}></img></div>
                    
                </div>    
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon8} style={{width:'130px',height:'150px'}}></img></div>
                </div>
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon9} style={{width:'130px',height:'150px'}}></img></div>
                </div>
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon10} style={{width:'130px',height:'150px'}}></img></div>
                </div>
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><img src={icon11} style={{width:'130px',height:'150px'}}></img></div>
                </div>               
            </div>
            <Next url={"8"}></Next>
        </div>
    )
}

export default OurMerits;