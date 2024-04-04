import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/FuelForm.css';

const TowForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        vehicleModel: '',
        licensePlateNumber: '',
        towReason: '',
        currentLocation: '',
        destination: '',
        additionalNote: ''
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
            const response = await fetch('http://localhost:8000/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
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
                    additionalNote: ''
                });
    
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div>
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
                            <label className='all_labels'>Full Name</label>
                            <input type="text" className='all_inp_label' value={formData.fullName} onChange={handleChange} required />
                            <label className='all_labels'>Email ID</label>
                            <input type="text" className='all_inp_label' value={formData.email} onChange={handleChange} required />
                            <label className='all_labels'>Model of Vehicle</label>
                            <input type="text" className='all_inp_label' value={formData.vehicleModel} onChange={handleChange} required />
                            <label className='all_labels'>License Plate Number</label>
                            <input type="text" className='all_inp_label' value={formData.licensePlateNumber} onChange={handleChange} required />
                            <label className='all_labels'>Reason for Tow (e.g., Breakdown, Accident)</label>
                            <input type="text" className='all_inp_label' value={formData.towReason} onChange={handleChange} required />
                            <label className='all_labels'>Current Location</label>
                            <input type="text" className='all_inp_label' value={formData.currentLocation} onChange={handleChange} required />
                            <label className='all_labels'>Destination</label>
                            <input type="text" className='all_inp_label' value={formData.destination} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="edit_other">
                        <label className='add_note'>Additional Note </label>
                        <input type="text" className='all_inp_label' id='add_note' value={formData.additionalNote} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TowForm;
