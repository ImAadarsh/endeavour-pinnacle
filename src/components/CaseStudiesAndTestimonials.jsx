import React, {useState, useEffect} from "react";
import '../styles/CaseStudiesAndTestimonials.css';
import Logo from './Logo';
import icon3 from '../assets/CaseStudiesAndTestimonials/3.png';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Next from "./Next";
import ReadMore from "./ReadMore";
const CaseStudiesAndTestimonials = () =>{
    const [data, setdata] = useState([]);
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items : 1,
            },
            400: {
                items : 1,
            },
            600: {
                items : 2,
            },
            700: {
                items : 3,
            },
            1000: {
                items : 4,
            }
        },
    };

    const getData = async ( ) => {        
        var requestOptions = {
          method: 'GET'
        };
        
        await fetch(`${process.env.REACT_APP_URL}/casestudy`, requestOptions)
          .then(response => response.json())
          .then((result)=>{
            setdata(result.data);
          })
          .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData();
      }, []);
    return (
        <div className="caseStudiesAndTestimonials" >
            <Logo></Logo>
            <div className="list">
                <div className="header">
                    <h2>CaseStudies</h2>
                    <a href="#">100+ CASE STUDY</a>
                </div>   
                <OwlCarousel key={`carousel_${data.length}`} className="owl-theme" {...options} loop style={{width:"80%"}}>
                    {data?.map((item,id)=>(
                        <div key={id} className="item" data-aos='flip-left' data-aos-duration="2000">
                            <div className="icons"><img src={item.icon}></img></div>
                            <div className="content">
                                <p>{item.text}</p>
                            </div>
                            <div>
                                <ReadMore _id={item._id}></ReadMore>
                            </div>
                        </div>
                    ))
                    }                      
                </OwlCarousel>
                
            </div>

            <div className="list" style={{paddingTop:'10px'}}>
                <div className="header">
                    <h2>Testimonials</h2>
                    <a href="#">100+ TESTIMONIALS</a>
                </div>   
                <OwlCarousel className="owl-theme" {...options} loop style={{width:"80%"}}>
                    <div className="item" data-aos='flip-left' data-aos-duration="2000">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item" data-aos='flip-left' data-aos-duration="2000">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item" data-aos='flip-left' data-aos-duration="2000">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                    <div className="item" data-aos='flip-left' data-aos-duration="2000">
                        <div className="content">
                            <p>Boost your product and service's credibility by adding testimonials from your clients</p>
                        </div>
                        <div style={{fontWeight :'bold'}}>John Doe</div>
                        <div className="icons"><img src={icon3}></img></div>
                    </div>
                </OwlCarousel>
                
            </div>
            <Next url={"9"}></Next>
        </div>
    )
}

export default CaseStudiesAndTestimonials;