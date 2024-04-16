// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    
    const handleChange = ({currentTarget: input}) => (
        setData({...data, [input.name]: input.value})
    )

    const handleLogin = async () => {
        try {
            const url = "http://localhost:8000/auth/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem('token', res.token);
            localStorage.setItem('userEmail', res.userEmail); // Store user's email
            console.log('Login successful!');
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password.');
        }
    };
    

    return (
        <div className="login_page">
            <div className="login_container">
                <h2>Welcome Back!</h2>

                {error && <p className="error-message">{error}</p>}

                <div className="login_form">
                    <input className='login_input'
                        type="email"
                        placeholder="Email" name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input className='login_input'
                        type="password"
                        placeholder="Password" name='password'
                        value={data.password}
                        onChange={handleChange}
                    />
                    <button className='login_btn' onClick={handleLogin}>Login</button>
                </div>

                <div class="toregister">
                    <p>New to our website?</p>
                    <Link to={'/register'} className='register_now'>Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
