import React from "react";
import logo from '../assets/logo.png';
import '../styles/Logo.css';
const Logo = () => {
    return (
        <div className="logo" data-aos='fade-right' data-aos-duration="1000">
            <img src={logo}></img>
        </div>
    )
}

export default Logo;