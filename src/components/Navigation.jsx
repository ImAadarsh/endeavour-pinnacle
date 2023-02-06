import React from "react";
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navigation.css';
import { useNavigate} from "react-router-dom";
import Logo from "./Logo";
import Header from "./Header";
const Navigation = ({content}) => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <Logo></Logo>
            <Header content={content}></Header>
        </div>
    )
}

export default Navigation;