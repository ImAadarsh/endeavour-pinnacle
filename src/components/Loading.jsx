import React from "react";
import '../styles/Loading.css';
const Loading = () =>{
    return (
        <div className="loading">
            <div className="loader"></div>
            <div className="loaderText">LOADING...</div>
        </div>
    )
}

export default Loading;