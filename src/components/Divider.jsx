import React from "react";
import '../styles/Divider.css';
import Logo from "./Logo";
const Divider = () =>{
    return (
        <div className="divider">
            <Logo></Logo>
            <ul>
                <li data-aos='fade-left' data-aos-duration="3000"><a href="/start/industry">INDUSTRY</a></li>
                <li data-aos='fade-right' data-aos-duration="3000"><a href="/start/product">PRODUCT</a></li>
            </ul>
        </div>
    )
}

export default Divider;