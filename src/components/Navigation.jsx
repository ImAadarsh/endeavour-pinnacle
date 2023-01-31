import React from "react";
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navigation.css';
import { useNavigate} from "react-router-dom";
const Navigation = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <a href="#"><MenuIcon style={{fontSize:'50px'}}></MenuIcon></a>
            <img src={logo} style={{width:'140px',height:'80px'}}></img>
            <a><CloseIcon style={{fontSize:'50px'}} onClick={() => navigate(-1)}></CloseIcon></a>
        </div>
    )
}

export default Navigation;