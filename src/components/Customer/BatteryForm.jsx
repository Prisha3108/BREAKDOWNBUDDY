import React, { useState } from 'react'
import HorizontalBar from './HorizontalBar'
import '../css/FuelForm.css'

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
            const response = await fetch('http://localhost:8000/submitBatteryForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(batteryFormData)
            });
            if (response.ok) {
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
        <div>
            <HorizontalBar
                serviceLink={'/batteryrequest'} />

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
                            <label className='all_labels'>Full Name</label>
                            <input type="text" className='all_inp_label' id='fullName' value={batteryFormData.fullName} onChange={handleChange} required />

                            <label className='all_labels'>Email ID</label>
                            <input type="text" className='all_inp_label' id='email' value={batteryFormData.email} onChange={handleChange} required />

                            <label className='all_labels'>Current Battery Type</label>
                            <input type="text" className='all_inp_label' id='currBatteryType' value={batteryFormData.currBatteryType} onChange={handleChange} required />

                            <label className='all_labels'>Preferred Battery Brand</label>
                            <input type="text" className='all_inp_label' id='prefBatteryType' value={batteryFormData.prefBatteryType} onChange={handleChange} required />

                            <label className='all_labels'>Model of Vehicle</label>
                            <input type="text" className='all_inp_label' id='vehicleModel' value={batteryFormData.vehicleModel} onChange={handleChange} required />

                            <label className='all_labels'>License Plate Number</label>
                            <input type="text" className='all_inp_label' id='licensePlateNumber' value={batteryFormData.licensePlateNumber} onChange={handleChange} required />

                            <label className='all_labels'> Current Location</label>
                            <input type="text" className='all_inp_label' id='currentLocation' value={batteryFormData.currentLocation} onChange={handleChange} required />

                        </div>
                    </div>

                    <div className="edit_other">
                        <label className='add_note'>Additional Note </label>
                        <input type="text" className='all_inp_label' id='add_note' value={batteryFormData.add_note} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BatteryForm
