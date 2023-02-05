import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav className="navbar" >
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                {/* <li><a href="/home">Home</a></li> */}
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Experiences</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
            <h1 className="logo">CHITTY</h1>
        </div>
    </nav >
    );
};
export default Navbar;