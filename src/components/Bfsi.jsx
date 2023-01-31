import React from "react";
import bfsiLogo from '../assets/Bfsi.png';
import '../styles/Bfsi.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Bfsi = () =>{
    return (
        <div className="containerBfsi">
            <div className="listBfsi">
                <ul>
                    <li><CheckCircleIcon/>Lorem lpsum is simply dummy text of the printing and typesetting industry</li>
                    <li><CheckCircleIcon/>Lorem lpsum is simply dummy text of the printing and typesetting industry</li>
                    <li><CheckCircleIcon/>Lorem lpsum is simply dummy text of the printing and typesetting industry</li>
                    <li><CheckCircleIcon/>Lorem lpsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
            </div>
            <div className="imgBfsi">
               <img src={bfsiLogo}></img>
            </div>
        </div>
    )
}

export default Bfsi;