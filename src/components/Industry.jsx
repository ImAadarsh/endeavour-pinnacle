import React from "react";
import '../styles/Industry.css';
import HomeIcon from '@mui/icons-material/Home';
import RouterIcon from '@mui/icons-material/Router';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Groups2Icon from '@mui/icons-material/Groups2';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import FlightIcon from '@mui/icons-material/Flight';
import MedicationIcon from '@mui/icons-material/Medication';
const Industry = () =>{
    return (
        <div className="industry">
            <div className="header">
               INDUSTRY LIST
            </div>
            <div className="list">
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><HomeIcon style={{fontSize:'90px'}}></HomeIcon></div>
                    <div style={{marginTop:'30px'}}>BFSI</div>
                </div>
                </a> 
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><RouterIcon style={{fontSize:'90px'}}></RouterIcon></div>
                    <div style={{marginTop:'30px'}}>IOT</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><LiveTvIcon style={{fontSize:'90px'}}></LiveTvIcon></div>
                    <div style={{marginTop:'30px'}}>ENTERTAINMENT</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><SchoolIcon style={{fontSize:'90px'}}></SchoolIcon></div>
                    <div style={{marginTop:'30px'}}>EDUCATION</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><HomeIcon style={{fontSize:'90px'}}></HomeIcon></div>
                    <div style={{marginTop:'30px'}}>GOVERNMENT</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><Groups2Icon style={{fontSize:'90px'}}></Groups2Icon></div>
                    <div style={{marginTop:'30px'}}>START-UP</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><ShoppingCartIcon style={{fontSize:'90px'}}></ShoppingCartIcon></div>
                    <div style={{marginTop:'30px'}}>E-COMMERCE</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><MedicalInformationIcon style={{fontSize:'90px'}}></MedicalInformationIcon></div>
                    <div style={{marginTop:'30px'}}>HEALTHCARE</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><FlightIcon style={{fontSize:'90px'}}></FlightIcon></div>
                    <div style={{marginTop:'30px'}}>TRAVEL & FOOD</div>
                </div>
                </a>
                <a href="/start/industry/bfsi">
                <div className="item">
                    <div className="icons"><MedicationIcon style={{fontSize:'90px'}}></MedicationIcon></div>
                    <div style={{marginTop:'30px'}}>PHARMACEUTICAL</div>
                </div>
                </a>
               
            </div>
        </div>
    )
}

export default Industry;