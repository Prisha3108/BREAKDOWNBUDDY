import React, { useState } from 'react';
import '../css/MechanicLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const MechanicLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/mechauth/mechlogin', {
                email,
                password
            });

            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify({ email: email }));
            // Redirect user to home page
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="mec_login_page">
            <div className="mec_login_container">
                <h2>Welcome Back!</h2>

                {error && <p className="error-message">{error}</p>}

                <div className="mec_login_form">
                    <input className='mec_login_input'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className='mec_login_input'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='mec_login_btn' onClick={handleLogin}>Login</button>
                </div>

                <div class="mec_toregister">
                    <p>New to our website?</p>
                    <Link to={'/mechregister'} className='mec_register_now'>Register Now</Link>
                </div>
            </div>
        </div>


    );
}

export default MechanicLogin
