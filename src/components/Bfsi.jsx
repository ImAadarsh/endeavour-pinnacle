import React from "react";
import bfsiLogo from '../assets/Bfsi.png';
import '../styles/Bfsi.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Logo from './Logo';
const Bfsi = () =>{
    return (
        <div className="containerBfsi">
            <Logo></Logo>
            <div className="header">
                <h1>BFSI- Banking, Financial Sevices and Insurance</h1>
            </div>
            <div className="listAndImg">
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
                <div className="imgBfsi">
                <img src={bfsiLogo}></img>
                </div>
            </div>
        </div>
    )
}

export default Bfsi;