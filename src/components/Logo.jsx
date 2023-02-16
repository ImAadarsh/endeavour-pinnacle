import React from "react";
import logo from '../assets/logo.png';
import '../styles/Logo.css';
const Logo = () => {
    return (
        <a href="/start">
        <div style={{position:'absolute',left:'40px',top:'20px'}} className="logo" data-aos='fade-right' data-aos-duration="2000">
            <img src={logo}></img>
        </div>
        </a>
    )
}

export default Logo;