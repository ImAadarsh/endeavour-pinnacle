import React from "react";
import '../styles/Divider.css';
import Logo from "./Logo";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import CategoryIcon from '@mui/icons-material/Category';
const Divider = () =>{
    return (
        <div className="divider">
            <Logo></Logo>
            <div className="list">
                <a href="/start/industry">
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><WarehouseIcon style={{color:'blue'}}></WarehouseIcon></div>
                    <div style={{fontWeight :'bold',fontSize:'30px'}}>INDUSTRY</div>                    
                </div>
                </a>

                <a href="/start/product">
                <div className="item" data-aos='flip-left' data-aos-duration="2000">
                    <div className="icons"><CategoryIcon style={{color:'blue'}}></CategoryIcon></div>
                    <div style={{fontWeight :'bold',fontSize:'30px'}}>PRODUCT</div>                    
                </div>
                </a>
            </div>
        </div>
    )
}

export default Divider;