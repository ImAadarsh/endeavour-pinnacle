import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../apis";
import '../styles/ContactUs.css';
import Navigation from "./Navigation";
import Next from "./Next";
import { Alert } from "@mui/material";
const ContactUs = () => {
    const navigate = useNavigate();
    const [contactData, setContactData] = useState({customerName : '', email: '', mobile : '', message : ''});
    const [message, setMessage] = useState("");
    
    const submit = async () => {
       const status=await postApi(contactData,"contact");
       console.log(status)
       if(status!=200){
          setMessage("some error occured!!")
          return ;
       }
       else{
          navigate('/start/10');
       }       
    }
    const setValue = (e) => {
        setContactData(
            (pre)=>{
                return{
                    ...pre,
                    [e.target.name] : e.target.value.trim()
                }
            }
        )
    }
    return (
        <div className="contactUs">
            <Navigation content={""}></Navigation>
            <div className="form">
                 <form method="post" action="/"  data-aos='flip-left' data-aos-duration="2000">
                     <h2>ContactUs</h2>
                        {message?(<Alert severity="error">{message}</Alert>):""}
                        <input onChange={setValue} placeholder="Enter name" name="customerName" required></input>                    
                        <input onChange={setValue} placeholder="Enter email" name="email" required></input>                    
                        <input onChange={setValue} placeholder="Moblie number" name="mobile" required></input>                    
                        <input onChange={setValue} placeholder="message" name="message"  required></input>    
                        <button type="button" onClick={submit}>SUBMIT</button>                
                 </form>
            </div>
            <Next url={"10"}></Next>
        </div>
    )
}

export default ContactUs;