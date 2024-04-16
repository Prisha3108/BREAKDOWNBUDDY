import React, { useState } from 'react';
import '../css/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const Register = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        mobileNo: ""
    });

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => (
        setData({...data, [input.name]: input.value})
    )

    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Validation
            if (!data.email || !data.fullName || !data.password || !data.mobileNo) {
                setError('Please fill in all fields.');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                setError('Invalid email address.');
                return;
            }
            if (/\d/.test(data.fullName)) {
                setError('Name should not contain numbers.');
                return;
            }
            if (data.mobileNo.length !== 10 || !/^\d+$/.test(data.mobileNo)) {
                setError('Mobile number should be exactly 10 digits long and contain only numbers.');
                return;
            }
            if (data.password.length < 6 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(data.password)) {
                setError('Password should be at least 6 characters long and contain at least one letter and one number.');
                return;
            }

            const url = "http://localhost:8000/auth/register";
            const {data:res} = await axios.post(url, data);
            navigate("/login")
            console.log('Registration successful!');

            alert('Registration successful!');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('User already exists. Please use a different email.');
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
                <input className='reg_input' type="email" placeholder="Email" name='email' value={data.email}
                    onChange={handleChange} required />

                <input className='reg_input' type="text" placeholder="Full Name" name='fullName' value={data.fullName}
                    onChange={handleChange} required />

                <input className='reg_input' type="tel" placeholder="Mobile Number" name='mobileNo' value={data.mobileNo}
                    onChange={handleChange} required />

                <input className='reg_input' type="password" placeholder="Password" name='password' value={data.password}
                    onChange={handleChange} required />

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
