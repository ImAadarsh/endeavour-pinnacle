import React from "react";
import '../styles/Divider.css';
import bgDivider from '../assets/bgDivider.png';
const Divider = () =>{
    return (
        <div className="divider">
             <ul style={{ backgroundImage: `url(${bgDivider})` }}>
                <li><a href="/start/industry">INDUSTRY</a></li>
                <li><a href="/start/product">PRODUCT</a></li>
             </ul>
        </div>
    )
}

export default Divider;