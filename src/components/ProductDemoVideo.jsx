import React from "react";
import '../styles/ProductDemoVideo.css';
import Navigation from "./Navigation";
import Next from "./Next";

const ProductDemoVideo = () =>{
    return (
        <div className="productDemoVideo">
            <Navigation content={"Product Demo Video"}></Navigation>
            <div style={{display : 'flex', height : '70vh', justifyContent : 'center', alignItems : 'center'}}> 
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
            <Next url={"5"}></Next>
        </div>
    )
}

export default ProductDemoVideo;