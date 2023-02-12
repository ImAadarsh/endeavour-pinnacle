import { Alert, Checkbox } from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../apis";
import '../styles/Feedback.css';
import Navigation from "./Navigation";
import Next from "./Next";
const Feedback = () => {
    const [feedbackData,setFeedbackData] = useState({ans1 : '1',ans2 : '3',ans3 : '4',ans4 : '1'});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const submit = async () => {     
        const status = await postApi(feedbackData,"feedback");
        if(status!=200){
            setMessage("unknown error!!");
            return false;
        }
        else {
            navigate('/');
            return true;
        }
    }
    return (
        <>
            <Navigation></Navigation>
            {message?(<Alert severity="error">{message}</Alert>):""}
            <div className="feedback">                
                <div className="questions">
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                    <div className="question">
                        <p>What is the capital of india?</p>
                        <ul>
                            <li><Checkbox></Checkbox>Mumbai</li>
                            <li><Checkbox></Checkbox>Delhi</li>
                            <li><Checkbox></Checkbox>Jaipur</li>
                            <li><Checkbox></Checkbox>Banglore</li>
                        </ul>   
                    </div>
                </div>
            </div>
            <Next url={""}></Next>
        </>
    )
}

export default Feedback;