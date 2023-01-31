import React from "react";
import '../styles/BackgroundVideo.css';
import backgroundVideo from '../assets/bgVideo2.mp4';
const BackgroundVideo = () =>{
    return (
        <div>
            <video autoPlay loop muted className='video'>
                <source src={backgroundVideo} type='video/mp4'></source>
            </video>
        </div>
    )
}

export default BackgroundVideo;