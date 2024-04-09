import React, { useState } from 'react';
import '../css/MechanicRegister.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const MechanicRegister = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState("");

    const types = [
        { id: 1, name: "Fuel Service" },
        { id: 2, name: "Battery Provider" },
        { id: 3, name: "Tow Service" },
        { id: 4, name: "Tyre Provider" }
    ];

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
            await axios.post('http://localhost:8000/mechauth/mechregister', {
                email,
                fullName,
                password,
                mobileNo,
                type
            });
            console.log('Registration successful!');
            // Clear input fields
            setError('');
            setEmail('');
            setFullName('');
            setPassword('');
            setMobileNo('');
            setType('');
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
                setType('');

            } else {
                console.error('Error registering:', error);
            }
        }
    };

    return (
        <div className="mec_register_container">
            <h2>Connect with us now!</h2>

            {error && <p className="error-message">{error}</p>}

            <div className="mec_reg_form">
                <input className='mec_reg_input' type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />

                <input className='mec_reg_input' type="text" placeholder="Full Name" value={fullName}
                    onChange={(e) => setFullName(e.target.value)} required />

                <input className='mec_reg_input' type="tel" placeholder="Mobile Number" value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)} required />

                <input className='mec_reg_input' type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />

                <select className="mec_reg_type" value={type} onChange={(e) => setType(e.target.value)} >
                    <option value="">Select type</option>
                    {types.map((type) => (
                        <option key={type.id} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </select>

                <button className='mec_reg_btn' onClick={handleRegister}>Register</button>
            </div>

            <div class="mec_tologin">
                <p>Already have a account?</p>
                <Link to={'/mechlogin'} className='mec_login_now'>Login Now</Link>
            </div>

        </div>
    );
}

export default MechanicRegister
