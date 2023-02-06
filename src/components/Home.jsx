import React from "react";
import '../styles/Home.css';
import logo from '../assets/logo.png';

const Home = () =>{
    return (
        <div className="home">
             <div className="start">
                <img src={logo} style={{width:'250px',height:'200px'}}></img><br/>
                <a href="/start">START</a>
             </div>
        </div>
    )
}

export default Home;