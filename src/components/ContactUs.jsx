import React from "react";
import '../styles/ContactUs.css';
import Navigation from "./Navigation";
import Next from "./Next";
const ContactUs = () => {
    return (
        <div className="contactUs">
            <Navigation content={"Contact Us"}></Navigation>
            <div className="form">
                 <form>

                 </form>
            </div>
            <Next url={"10"}></Next>
        </div>
    )
}

export default ContactUs;