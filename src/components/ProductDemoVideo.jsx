import React from "react";
import '../styles/ProductDemoVideo.css';
import Logo from './Logo';

const ProductDemoVideo = () =>{
    return (
        <div className="productDemoVideo">
            <Logo></Logo>
            <div className="header">
               <h2>Product Demo Video</h2>
            </div>
            <div style={{display : 'flex', height : '100vh', justifyContent : 'center', alignItems : 'center'}}> 
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/jqpePNeAtNs" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            >
            </iframe>             
            </div>
        </div>
    )
}

export default ProductDemoVideo;