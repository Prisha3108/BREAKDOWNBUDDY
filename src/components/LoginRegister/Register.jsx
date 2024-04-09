import React, { useState } from 'react';
import '../css/Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const Register = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            // Validation
            if (!email || !fullName || !password || !mobileNo) {
                setError('Please fill in all fields.');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setError('Invalid email address.');
                return;
            }
            if (/\d/.test(fullName)) {
                setError('Name should not contain numbers.');
                return;
            }
            if (mobileNo.length !== 10 || !/^\d+$/.test(mobileNo)) {
                setError('Mobile number should be exactly 10 digits long and contain only numbers.');
                return;
            }
            if (password.length < 6 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
                setError('Password should be at least 6 characters long and contain at least one letter and one number.');
                return;
            }

            // Send POST request to backend API
            await axios.post('http://localhost:8000/auth/register', {
                email,
                fullName,
                password,
                mobileNo
            });
            console.log('Registration successful!');
            // Clear input fields
            setError('');
            setEmail('');
            setFullName('');
            setPassword('');
            setMobileNo('');
            // Display alert
            alert('Registration successful!');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('User already exists. Please use a different email.');
                // Clear input fields
                setEmail('');
                setFullName('');
                setPassword('');
                setMobileNo('');
            } else {
                console.error('Error registering:', error);
            }
        }
    };

    return (
        <div className="register_container">
            <h2>Connect with us now!</h2>

            {error && <p className="error-message">{error}</p>}

            <div className="reg_form">
                <input className='reg_input' type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />

                <input className='reg_input' type="text" placeholder="Full Name" value={fullName}
                    onChange={(e) => setFullName(e.target.value)} required />

                <input className='reg_input' type="tel" placeholder="Mobile Number" value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)} required />

                <input className='reg_input' type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />

                <button className='reg_btn' onClick={handleRegister}>Register</button>
            </div>

            <div className="tologin">
                <p>Already have an account?</p>
                <Link to={'/login'} className='login_now'>Login Now</Link>
            </div>
        </div>
    );
};

export default Register;
