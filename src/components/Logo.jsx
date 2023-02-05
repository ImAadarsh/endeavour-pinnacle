import React from "react";
import logo from '../assets/logo.png';
import '../styles/Logo.css';
const Logo = () => {
    return (
        <div className="logo">
            <img src={logo}></img>
        </div>
    )
}

export default Logo;