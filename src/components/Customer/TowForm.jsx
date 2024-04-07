import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/FuelForm.css';
import { FaUser, FaEnvelope, FaCar, FaStickyNote } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { GiTowTruck } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import license from '../../assests/license-plate.png';
import axios from 'axios'; // Import Axios

const TowForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        vehicleModel: '',
        licensePlateNumber: '',
        towReason: '',
        currentLocation: '',
        destination: '',
        add_note: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/tow/submitForm', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                console.log('Form data submitted successfully');
                alert('Form data submitted successfully');
                // clear form data
                setFormData({
                    fullName: '',
                    email: '',
                    vehicleModel: '',
                    licensePlateNumber: '',
                    towReason: '',
                    currentLocation: '',
                    destination: '',
                    add_note: ''
                });
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className='towreq'>
            <HorizontalBar serviceLink={'/towrequest'} />
            <div className="form_box">
                <form onSubmit={handleSubmit}>
                    <div className="fill_name">
                        <div className="form_btn_tag">
                            <div className="from_tag">
                                <p className='pf_name'>Tow Requirement</p>
                                <p className='personal_pf'>Quick Help, Right When You Need It.</p>
                            </div>
                            <div className="form_button">
                                <button className='submit_request'>Submit</button>
                            </div>
                        </div>
                        <div className="hz_line"></div>
                        <div className="edit_form">
                            <label className='all_labels'> <FaUser /> Full Name</label>
                            <input type="text" className='all_inp_label' id='fullName' placeholder='Enter your name' value={formData.fullName} onChange={handleChange} required />
                            <label className='all_labels'> <FaEnvelope /> Email ID</label>
                            <input type="email" className='all_inp_label' id='email' placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
                            <label className='all_labels'> <FaCar /> Model of Vehicle</label>
                            <input type="text" className='all_inp_label' id='vehicleModel' placeholder='Enter your vehicle model' value={formData.vehicleModel} onChange={handleChange} required />
                            <label className='all_labels' id='lpn'> 
                            <img src={license} alt="License-Plate" className="license" /> 
                            License Plate Number</label>
                            <input type="text" className='all_inp_label' id='licensePlateNumber' placeholder='Enter your vehicle license plate number' value={formData.licensePlateNumber} onChange={handleChange} required />
                            <label className='all_labels'> <GiTowTruck /> Reason for Tow (e.g., Breakdown, Accident)</label>
                            <input type="text" className='all_inp_label' id='towReason' placeholder='Enter your tow reason' value={formData.towReason} onChange={handleChange} required />
                            <label className='all_labels'> <IoLocationSharp /> Current Location</label>
                            <input type="text" className='all_inp_label' id='currentLocation' placeholder='Enter your current location' value={formData.currentLocation} onChange={handleChange} required />
                            <label className='all_labels'> <FaMapLocationDot /> Destination</label>
                            <input type="text" className='all_inp_label' id='destination' placeholder='Enter your destination' value={formData.destination} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="edit_other">
                        <label className='add_note'> <FaStickyNote /> Additional Note </label>
                        <input type="text" className='all_inp_label' id='add_note' placeholder='Enter message' value={formData.add_note} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TowForm;
