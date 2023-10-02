import React, { useState } from "react";
import './Login.scss';
import { Link } from "react-router-dom";
import logo from './logo.jpg'
import welcomeImg from './welcomeImg.jpg'


function Login() {

    const [emailval, setemailval] = useState("");
    const [passwordval, setpasswordval] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="main-login">
            
                <h1>Login Page</h1>
                
            <div className="login-contain">
                <div className="left-side">
                    <div className="img-class">
                        <img src={welcomeImg} alt="" id="img-id" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter your Email" id="email" value={emailval} onChange={(e) => {setemailval(e.target.value)}} />
                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter your Password" id="pwd" value={passwordval} onChange={(e) =>{setpasswordval(e.target.value)}} />
                        <button type="submit" id="sub-btn">Login</button>
                    </form>
                    <div className="footer">
                        <h4>Don't have an account?<Link to='/Register'>Register Now</Link></h4>
                    </div>
                </div>
                <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className="welcomeImg">
                        <img src={logo} id="wel-img-id" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Login;