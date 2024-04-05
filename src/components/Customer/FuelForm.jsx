import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/FuelForm.css';

const FuelForm = () => {
  const [fuelFormData, setFuelFormData] = useState({
    fullName: '',
    email: '',
    vehicleModel: '',
    licensePlateNumber: '',
    fuelAmount: '',
    fuelType: '',
    currentLocation: '',
    add_note: ''
  });

  const availableFuelTypes = ["Petrol", "Diesel", "CNG"];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFuelFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/submitFuelForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fuelFormData)
      });
      if (response.ok) {
        console.log('Form data submitted successfully');
        alert('Form data submitted successfully');
        // clear form data
        setFuelFormData({
          fullName: '',
          email: '',
          vehicleModel: '',
          licensePlateNumber: '',
          fuelAmount: '',
          fuelType: '',
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
      <HorizontalBar serviceLink={'/fuelrequest'} />

      <div className="form_box">
        <form onSubmit={handleSubmit}>
          <div className="fill_name">
            <div className="form_btn_tag">
              <div className="from_tag">
                <p className='pf_name'>Fuel Requirement</p>
                <p className='personal_pf'>Quick Help, Right When You Need It.</p>
              </div>

              <div className="form_button">
                <button className='submit_request'>Submit</button>
              </div>
            </div>
            <div className="hz_line"></div>
            <div className="edit_form">
              <label className='all_labels'>Full Name</label>
              <input type="text" className='all_inp_label' id='fullName' placeholder='Enter your name' value={fuelFormData.fullName} onChange={handleChange} required />

              <label className='all_labels'>Email ID</label>
              <input type="text" className='all_inp_label' id='email' placeholder='Enter your email'  value={fuelFormData.email} onChange={handleChange} required />

              <label className='all_labels'>Model of Vehicle</label>
              <input type="text" className='all_inp_label' id='vehicleModel' placeholder='Enter your Vehicle Model'  value={fuelFormData.vehicleModel} onChange={handleChange} required />

              <label className='all_labels'>License Plate Number</label>
              <input type="text" className='all_inp_label' id='licensePlateNumber' placeholder='Enter your vehicle license plate number' value={fuelFormData.licensePlateNumber} onChange={handleChange} required />

              <label className='all_labels'>Amount of Fuel Needed (in Liters) </label>
              <input type="number" step="0.1" className='all_inp_label' id='fuelAmount' placeholder='Enter the amount of fuel'  value={fuelFormData.fuelAmount} onChange={handleChange} required />

              <label className='all_labels'>Fuel Type </label>
              <select id="fuelType" className='all_inp_label' value={fuelFormData.fuelType} onChange={handleChange} required>
                <option value="">Select Fuel Type</option>
                {availableFuelTypes.map((fuelType, index) => (
                  <option key={index} value={fuelType}>{fuelType}</option>
                ))}
              </select>

              <label className='all_labels'>Current Location</label>
              <input type="text" className='all_inp_label' id='currentLocation' placeholder='Enter your current location'  value={fuelFormData.currentLocation} onChange={handleChange} required />
            </div>
          </div>
          <div className="edit_other">
            <label className='add_note'>Additional Note </label>
            <input type="text" className='all_inp_label' id='add_note' placeholder='Enter message'  value={fuelFormData.additionalNote} onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FuelForm;
