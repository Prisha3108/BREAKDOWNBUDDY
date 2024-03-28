import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'
import logo from '../assests/logo.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-section">
                <div className="logo">
                    <img src={logo}  />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="right-section">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Register</Link>
            </div>
        </div>
    );
}

export default Navbar;
