import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/FuelForm.css';
import { FaUser, FaEnvelope, FaCar, FaStickyNote, FaCarBattery } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import license from '../../assests/license-plate.png';
import axios from 'axios'; // Import Axios

const BatteryForm = () => {
    const [batteryFormData, setBatteryFormData] = useState({
        fullName: '',
        email: '',
        currBatteryType: '',
        prefBatteryType: '',
        vehicleModel: '',
        licensePlateNumber: '',
        currentLocation: '',
        add_note: ''
    });

    const availableBatteryTypes = ["Lead Acid Battery", "VRLA Batteries", "Lithium-Ion Battery", "Sodium Ion Battery", "Solid-State Battery", "Nickel-Metal Hydride (NiMH) Battery", "Silver Calcium Battery"];

    const handleChange = (e) => {
        const { id, value } = e.target;
        setBatteryFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/battery/submitBatteryForm', batteryFormData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                console.log('Form data submitted successfully');
                alert('Form data submitted successfully');
                // clear form data
                setBatteryFormData({
                    fullName: '',
                    email: '',
                    currBatteryType: '',
                    prefBatteryType: '',
                    vehicleModel: '',
                    licensePlateNumber: '',
                    currentLocation: '',
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
        <div className='batteryreq'>
            <HorizontalBar serviceLink={'/batteryrequest'} />
            <div className="form_box">
                <form onSubmit={handleSubmit}>
                    <div className="fill_name">
                        <div className="form_btn_tag">
                            <div className="from_tag">
                                <p className='pf_name'>Battery Requirement</p>
                                <p className='personal_pf'>Quick Help, Right When You Need It.</p>
                            </div>
                            <div className="form_button">
                                <button className='submit_request'>Submit</button>
                            </div>
                        </div>
                        <div className="hz_line"></div>
                        <div className="edit_form">
                            <label className='all_labels'> <FaUser /> Full Name </label>
                            <input type="text" className='all_inp_label' placeholder='Enter your name' id='fullName' value={batteryFormData.fullName} onChange={handleChange} required />
                            <label className='all_labels'> <FaEnvelope /> Email ID</label>
                            <input type="email" className='all_inp_label' placeholder='Enter your email' id='email' value={batteryFormData.email} onChange={handleChange} required />
                            <label className='all_labels'> <FaCarBattery /> Current Battery Type</label>
                            <select id="currBatteryType" className='all_inp_label' value={batteryFormData.currBatteryType} onChange={handleChange} required>
                                <option value="">Select Battery Type</option>
                                {availableBatteryTypes.map((currBatteryType, index) => (
                                    <option key={index} value={currBatteryType}>{currBatteryType}</option>
                                ))}
                            </select>
                            <label className='all_labels'> <FaCarBattery /> Preferred Battery Brand</label>
                            <select id="prefBatteryType" className='all_inp_label' value={batteryFormData.prefBatteryType} onChange={handleChange} required>
                                <option value="">Select Battery Type</option>
                                {availableBatteryTypes.map((prefBatteryType, index) => (
                                    <option key={index} value={prefBatteryType}>{prefBatteryType}</option>
                                ))}
                            </select>
                            <label className='all_labels'> <FaCar /> Model of Vehicle</label>
                            <input type="text" className='all_inp_label' placeholder='Enter your vehicle model' id='vehicleModel' value={batteryFormData.vehicleModel} onChange={handleChange} required />
                            <label className='all_labels' id='lpn'>
                            <img src={license} alt="License-Plate" className="license" /> License Plate Number</label>
                            <input type="text" className='all_inp_label' placeholder='Enter your vehicle license plate number' id='licensePlateNumber' value={batteryFormData.licensePlateNumber} onChange={handleChange} required />
                            <label className='all_labels'> <IoLocationSharp /> Current Location</label>
                            <input type="text" className='all_inp_label' placeholder='Enter your current location' id='currentLocation' value={batteryFormData.currentLocation} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="edit_other">
                        <label className='add_note'> <FaStickyNote /> Additional Note </label>
                        <input type="text" className='all_inp_label' placeholder='Enter message' id='add_note' value={batteryFormData.add_note} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BatteryForm;
