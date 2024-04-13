import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assests/logo3.png';
import './css/Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleRegisterDropdown = () => {
        setRegisterDropdownOpen(!registerDropdownOpen);
    };

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            const storedEmail = localStorage.getItem('userEmail');
            const storedType = localStorage.getItem('userType');
            setUserEmail(storedEmail);
            setUserType(storedType);
        } else {
            setIsLoggedIn(false);
            setUserEmail('');
            setUserType('');
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userType');
        setIsLoggedIn(false);
        setUserEmail('');
        setUserType('');
        navigate('/');
    };

    return (
        <div className="navbar">
            <div className="left-section">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>

            <div className="right-section">
                {isLoggedIn ? (
                    <div className="user-info">
                        <p>Welcome, {userEmail}</p>
                        <button onClick={handleLogout} className='logout_btn'>Logout</button>
                    </div>
                ) : (
                    <div className="auth-links">
                        <React.Fragment>
                            <div className={`nav_login ${dropdownOpen ? 'active-link' : ''}`} onClick={toggleDropdown}>
                                <p> Log in </p>
                                {dropdownOpen && (
                                    <div className='lr-dropdown'>
                                        <Link to={'/login'} className='dropdown-lr'>Customer Login</Link>
                                        <Link to={'/mechlogin'} className='dropdown-lr'>Mechanic Login</Link>
                                    </div>
                                )}
                            </div>

                            <div className={`nav_register ${registerDropdownOpen ? 'active-link' : ''}`} onClick={toggleRegisterDropdown}>
                                <p> Register </p>
                                {registerDropdownOpen && (
                                    <div className='lr-dropdown'>
                                        <Link to={'/register'} className='dropdown-lr'>Customer Register </Link>
                                        <Link to={'/mechregister'} className='dropdown-lr'>Mechanic Register </Link>
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
