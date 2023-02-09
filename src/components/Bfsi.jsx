import React from "react";
import bfsiLogo from '../assets/Bfsi.png';
import '../styles/Bfsi.css';
import Navigation from "./Navigation";
import Next from "./Next";
const Bfsi = () =>{
    return (
        <div className="containerBfsi">
            <Navigation content={"BFSI- Banking, Financial Sevices and Insurance"}></Navigation>
            <div className="listAndImg">
                <div className="imgBfsi">
                    <img src={bfsiLogo}></img>
                </div>
                <div className="listBfsi">
                    <h1>Build Trust and Achieve More with Timely Communication</h1>
                    <p>
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    Lorem lpsum is simply dummy text of the printing and typesetting industry
                    </p>
                </div>
            </div>
            <Next url={"2"}></Next>
        </div>
    )
}

export default Bfsi;