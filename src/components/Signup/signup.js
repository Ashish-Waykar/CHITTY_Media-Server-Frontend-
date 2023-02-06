import React from "react";
import { Link } from "react-router-dom";
const Signup=()=>{
    return (
        <div className="main">
        <div className="item-1">
            <div className="content">
                <h1>Create Account</h1>
                <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" />
            </div>
        </div>
        <div className="item-2">
            
            <div className="login-card">
                <div className="header">
                    <h1>Chatty </h1>
                </div>
                <div className="input_">
                    <input placeholder="Name " autocapitalize="off" autocorrect="off" maxlength="75" name="username" type="text" class="_aa4b" />
                    <br/>
                    <input placeholder="Phone number, username, or email" autocapitalize="off" autocorrect="off" maxlength="75" name="username" type="text" class="_aa4b" />
                    <br/>
                    <input placeholder="Password" autocapitalize="off" autocorrect="off" name="password" type="password" class="_aa4b" />
                    
                    <br/>
                    <br/>
                    <a className="btn btn-primary"> Signup</a>
                    <br/>
                    <br/>
                    <div className="dash-main">

                    <hr className="dash"/> 
                    <h4 className="dash">OR</h4>
                     <hr className="dash"/>

                    </div>
                    <br/>

                    <h5>Login With Facebook</h5>
                    <br/>
                    
                </div>
        <hr/>
        <br/>
        <div className="signup-card">
                <Link to ="/signin">Already Have An Account ? <span>Signin</span></Link>
        </div>
        <br/>
        
            </div>
            
        </div>
    </div>
    );
}

export default Signup;