import React from 'react'
import HorizontalBar from './HorizontalBar'
import '../css/FuelForm.css'

const FuelForm = () => {
  return (
    <div>
      <HorizontalBar
        serviceLink={'/fuelrequest'} />

      <div className="form_box">
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
            <label className='fullname'>Full Name</label>
            <input type="text" id='fullname' required />

            <label className='pf_email'>Email ID</label>
            <input type="text" id='pf_email' required />

            <label className='vh_model'>Model of Vehicle</label>
            <input type="text" id='vh_model' required />

            <label className='vh_noplate'>License Plate Number</label>
            <input type="text" id='vh_noplate' required />

            <label className='fuel_amt'>Amount of Fuel Needed (in Liters) </label>
            <input type="text" id='fuel_amt' required />

            <label className='fuel_type'>Fuel Type (Gasoline, Diesel, etc.) </label>
            <input type="text" id='fuel_type' required />

            <label className='vh_location'>Current Location</label>
            <input type="text" id='vh_location' required />

          </div>
        </div>

        <div className="edit_other">
          <label className='add_note'>Additional Note </label>
          <input type="text" id='add_note' />
        </div>
      </div>

    </div>
  )
}

export default FuelForm
