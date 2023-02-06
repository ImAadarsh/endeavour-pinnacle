import React from "react";
import '../styles/Product.css';
import Sms from '../assets/Product/1.png';
import Email from '../assets/Product/2.png';
import WhatsApp from '../assets/Product/3.png';
import Voice from '../assets/Product/4.png';
import Navigation from "./Navigation";
import Next from "./Next";

const Product = () =>{
    return (
        <div className="product">
            <Navigation content="PRODUCTS LIST"></Navigation>
            <div className="list">
               
                <div className="item">
                    <div className="icons"><img src={Sms}></img></div>
                    <div style={{fontWeight :'bold'}}>BFSI</div>
                    <div className="content">
                        <p>Deliver your transactional, OTPs, and Promotional messages securely and timely to the consumer.</p>
                    </div>
                    
                </div>
                

                
                <div className="item">
                    <div className="icons"><img src={Email}></img></div>
                    <div style={{fontWeight :'bold'}}>EMAIL</div>
                    <div className="content">
                        <p>Power up the campaigns with the most coat-effective and high ROI email solutions.</p>
                    </div>
                </div>

            
                <div className="item">
                    <div className="icons"><img src={WhatsApp}></img></div>
                    <div style={{fontWeight :'bold'}}>WHATSAPP BUSINESS API</div>
                    <div className="content">
                        <p>Reach more than 2 billion users with fast, reliable, ecrypted, and AI/ML-enabled WhatsApp Business API</p>
                    </div>
                </div>

            
                <div className="item">
                    <div className="icons"><img src={Voice}></img></div>
                    <div style={{fontWeight :'bold'}}>VOICE</div>
                    <div className="content">
                        <p>Procreate tailored voice call solutions and seamlessly reach millions in a day in various global language</p>
                    </div>
                </div>
               
            </div>
            <Next url={"3"}></Next>
        </div>
    )
}

export default Product;