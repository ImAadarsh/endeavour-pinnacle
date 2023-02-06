import React from "react";
import '../styles/Header.css';

const Header = ({content}) =>{
    return (
        <div className="header">
            <h3>{content}</h3>
        </div>
    )
}
export default Header