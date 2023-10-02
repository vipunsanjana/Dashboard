import React from "react";
import './Register.scss'
import logo from './welcomeImg.jpg'
import reg from './reg.jpeg'
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [email, setemail] = useState("");
    const [Fusername, setFusername] = useState("");
    const [Lusername, setLusername] = useState("");
    const [pwd1, setpwd1] = useState("");
    const [pwd2, setpwd2] = useState("");


    return ( 
        <div className="main-register">
            
                <div className="left-side">
                    <div className="header">
                        <img src={logo} id="logo-img" alt="" />
                    </div>
                    <div className="body">
                        <img src={reg} id="reg-img" alt="" />
                    </div>
                    <p>Environment means what surrounds us. It may be living or non-living things. 
                        It includes physical, chemical and other natural forces. Living things live in 
                        their environment. They constantly interact with it and adapt themselves to 
                        conditions in their environment. In the environment there are 
                        different interactions between animals, plants, soil, water, and other living 
                        and non-living things. The word environment is used to talk about many things. 
                        People in different fields of knowledge use the word environment differently. 
                        Electromagnetic environment is radio waves and other electromagnetic radiation and magnetic fields. 
                        The environment of a galaxy may mean the interstellar medium, or it may mean other nearby galaxies. 
                    </p>
                </div>
                <div className="right-side">
                    <div className="right-top">
                        <h4>
                            Already have an account
                            <Link to='/' id="links-signin">Move into Login page</Link>
                        </h4>
                    </div>
                    <div className="body-right">
                        <div className="container">
                            <h1>Create Account!</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <h5>First Name</h5>
                                    <input type="text" name="Fname" id="fname" value={Fusername} onChange={(e)=>{setFusername(e.target.value)}} />
                                </div>
                                <div className="input-group">
                                    <h5>Last Name</h5>
                                    <input type="text" name="Lname" id="lname" value={Lusername} onChange={(e)=>{setLusername(e.target.value)}} />
                                </div>
                                <div className="input-group">
                                    <h5>Email</h5>
                                    <input type="email" name="email" id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                                </div>
                                <div className="input-group">
                                    <h5>Password</h5>
                                    <input type="Password" name="Password" id="Pwd1" value={pwd1} onChange={(e)=>{setpwd1(e.target.value)}} />
                                </div>
                                <div className="input-group">
                                    <h5>Confirm Password</h5>
                                    <input type="Password" name="conpwd" id="pwd2" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} />
                                </div>
                                <input type="submit" id="sbtn" value="Submit" />
                            </form>
                        </div>
                    </div>
                
                </div>

        </div>
    );
}

export default Register;