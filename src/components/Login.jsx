import React , {useState} from "react";
import '../styles/Login.css';
import Navigation from "./Navigation";
import Next from "./Next";
const Login = () => {
    const userData = useState({email : '', password : ''});
    return (
        <div className="login">
            <Navigation content={""}></Navigation>
            <div className="form">
                 <form>
                     <h2>LOGIN</h2>
                     <input placeholder="Enter Email" name="email" value={userData.email} required></input>                    
                     <input placeholder="Enter password" name="password" value={userData.password} required></input>    
                     <button>LOGIN</button>
                     <div>
                        new user? <a href="#">create new account</a>
                     </div>                
                 </form>
            </div>
            <Next url={""}></Next>
        </div>
    )
}

export default Login;