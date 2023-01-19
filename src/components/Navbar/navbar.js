import React from "react";
import "./navbar.css";
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
                <li><a href="/home">Home</a></li>
                <li><a href="/home">Services</a></li>
                <li><a href="/home">About Us</a></li>
                <li><a href="/home">Experiences</a></li>
                <li><a href="/home">Contact Us</a></li>
                <li><a href="/home">Login/Register</a></li>
            </ul>
            <h1 className="logo">Navbar</h1>
        </div>
    </nav >
    );
};
export default Navbar;