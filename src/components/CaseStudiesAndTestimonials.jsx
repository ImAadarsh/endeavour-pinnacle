import React from "react";
import '../styles/CaseStudiesAndTestimonials.css';
import Logo from './Logo';
import icon1 from '../assets/CaseStudiesAndTestimonials/1.png';
import icon2 from '../assets/CaseStudiesAndTestimonials/2.png';
import icon3 from '../assets/CaseStudiesAndTestimonials/3.png';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Next from "./Next";

const CaseStudiesAndTestimonials = () =>{
    return (
        <div className="caseStudiesAndTestimonials" >
            <Logo></Logo>
            <div className="list">
                <div className="header">
                    <h2>CaseStudies</h2>
                    <a href="#">100+ CASE STUDY</a>
                </div>   
                <OwlCarousel className="owl-theme" items={4} loop nav style={{width:"80%"}}>
                    <div className="item">
                        <div className="icons"><img src={icon1}></img></div>
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icons"><img src={icon2}></img></div>
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icons"><img src={icon1}></img></div>
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icons"><img src={icon2}></img></div>
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div>
                            <a href="#">Read More</a>
                        </div>
                    </div>    
                </OwlCarousel>
                
            </div>

            <div className="list" style={{paddingTop:'10px'}}>
                <div className="header">
                    <h2>Testimonials</h2>
                    <a href="#">100+ TESTIMONIALS</a>
                </div>   
                <OwlCarousel className="owl-theme" items={4} loop nav style={{width:"80%"}}>
                    <div className="item">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                </OwlCarousel>
                
            </div>
            <Next url={""}></Next>
        </div>
    )
}

export default CaseStudiesAndTestimonials;