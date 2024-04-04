import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/FuelForm.css'; // Assuming you have a CSS file named TyreForm.css for styling

const TyreForm = () => {
    const [tyreFormData, setTyreFormData] = useState({
        fullName: '',
        email: '',
        numTyreReq: '',
        vehicleModel: '',
        licensePlateNumber: '',
        currentLocation: '',
        add_note: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setTyreFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/submitTyreForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tyreFormData)
            });
            if (response.ok) {
                console.log('Form data submitted successfully');
                alert('Form data submitted successfully');
                // clear form data
                setTyreFormData({
                    fullName: '',
                    email: '',
                    numTyreReq: '',
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
            <HorizontalBar serviceLink={'/tyrerequest'} />
            <div className="form_box">
                <form onSubmit={handleSubmit}>
                    <div className="fill_name">
                        <div className="form_btn_tag">
                            <div className="from_tag">
                                <p className='pf_name'>Tyre Replacement</p>
                                <p className='personal_pf'>Quick Help, Right When You Need It.</p>
                            </div>
                            <div className="form_button">
                                <button className='submit_request'>Submit</button>
                            </div>
                        </div>
                        <div className="hz_line"></div>
                        <div className="edit_form">
                            <label className='all_labels'>Full Name</label>
                            <input type="text" className='all_inp_label' id="fullName" value={tyreFormData.fullName} onChange={handleChange} required />

                            <label className='all_labels'>Email ID</label>
                            <input type="text" className='all_inp_label' id="email" value={tyreFormData.email} onChange={handleChange} required />

                            <label className='all_labels'>No. of tyres to be replaced</label>
                            <input type="number" className='all_inp_label' id="numTyreReq" value={tyreFormData.numTyreReq} onChange={handleChange} required />

                            <label className='all_labels'>Model of Vehicle</label>
                            <input type="text" className='all_inp_label' id="vehicleModel" value={tyreFormData.vehicleModel} onChange={handleChange} required />

                            <label className='all_labels'>License Plate Number</label>
                            <input type="text" className='all_inp_label' id="licensePlateNumber" value={tyreFormData.licensePlateNumber} onChange={handleChange} required />

                            <label className='all_labels'> Current Location</label>
                            <input type="text" className='all_inp_label' id="currentLocation" value={tyreFormData.currentLocation} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="edit_other">
                        <label className='add_note'>Additional Note </label>
                        <input type="text" className='all_inp_label' id="add_note" value={tyreFormData.add_note} onChange={handleChange} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TyreForm;
