import React from "react";
import '../styles/Divider.css';
import Logo from "./Logo";
const Divider = () =>{
    return (
        <div className="divider">
            <Logo></Logo>
            <ul>
                <li><a href="/start/industry">INDUSTRY</a></li>
                <li><a href="/start/product">PRODUCT</a></li>
            </ul>
        </div>
    )
}

export default Divider;