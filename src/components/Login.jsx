import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import Navigation from "./Navigation";
import Next from "./Next";
import { loginUserApi } from "../apis";
import Alert from '@mui/material/Alert';
const Login = () => {
    const [userData,setUserData] = useState({email : '', password : '',userType: 'admin'});
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
   
    const navigateAfter = async (e) => {
        e.preventDefault()
        if(userData.email==""){
            setMessage("Please enter email");
        }         
        else if(userData.password==""){
            setMessage("Please enter password");
        } 
        else{
            const checkUser = await submit();
            if(checkUser){       
                navigate('/start/11');
                // window.location.reload();
            }            
        }
    }
    const submit = async () => {     
        const status = await loginUserApi(userData);
        if(status!=200){
            setMessage("Email and Password incorrect!!");
            return false;
        }
        return true;
    }
    const setValue = (e) =>{
        setUserData((pre)=>{
            return{
                ...pre,
                [e.target.name]:e.target.value.trim()
            }
        })
    }
    return (
        <div className="login">
            <Navigation content={""}></Navigation>
            <div className="form">
                <form method="post" data-aos='flip-left' data-aos-duration="2000">
                    <h2>LOGIN</h2>
                    {message?(<Alert severity="error">{message}</Alert>):""}
                        <input onChange={setValue} placeholder="Enter Email" name="email" required></input>                    
                        <input onChange={setValue} placeholder="Enter password" name="password"  required></input>    
                        <button onClick={navigateAfter}>LOGIN</button>
                    <div>
                        <a href="/start/11" style={{textDecoration:'none',color:'red'}}>Skip</a>
                    </div>                
                 </form>
            </div>
            <Next url={"11"}></Next>
        </div>
    )
}

export default Login;