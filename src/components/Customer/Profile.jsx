import React, { useState, useEffect } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/Profile.css';
import pfimg from '../../assests/profile.jpg';
import axios from 'axios';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [myuserData, setMyUserData] = useState({
    fullName: '',
    email: '',
    mobileNo: ''
  });
  const [profileData, setProfileData] = useState({
    vehicleModel: '',
    licensePlateNumber: '',
    emergencyContact: '',
    relation: '',
    emergencyName: ''
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        // Fetch user data
        const userResponse = await axios.get('http://localhost:8000/auth/user', config);
        const userData = userResponse.data;
        setMyUserData(userData);

        // Fetch profile data
        const profileResponse = await axios.get('http://localhost:8000/myprofile', config);
        const profileData = profileResponse.data;
        setProfileData(profileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const updatedProfileData = {
        ...myuserData, // Include user data (name, email, mobileNo)
        ...profileData // Include vehicle details
      };

      await axios.post('http://localhost:8000/myprofile/update', updatedProfileData, config);
      setEditMode(false); // Disable edit mode after saving
    } catch (error) {
      console.error('Error saving profile:', error);
      // Handle error
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='update_profile'>
      <HorizontalBar />
      <div className="">
        <div className="profile_page">
          <div className="profile_left">
            <div className="pf_pic">
              <label htmlFor="upload-button" className="upload-button">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="profile_image" />
                ) : (
                  <img src={pfimg} alt="Profile" className="profile_image" />
                )}
              </label>
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-button" />
            </div>
            <p className='pf_change'>Click on the profile picture to change!</p>
            <h2 className='my_profile'>My Profile</h2>
            <div className="pf_name_email">
              <div className='name_fields'>
                <input type="text" className='name_email' name="fullName" placeholder='Name' id='name' value={myuserData.fullName} disabled={!editMode} />
                <input type="text" className='name_email' name="email" placeholder='Email' id='email' value={myuserData.email} disabled />
                <input type="text" className='name_email' name="mobileNo" placeholder='Mobile No.' id='phone' value={myuserData.mobileNo} disabled />
              </div>
            </div>
          </div>

          <div className="right_side">
            <div className="profile_right">
              <h2 className='my_profile' id='user_pf'>Car Details</h2>
              <div className='vehicle_fields'>
                <input type="text" className='vehicle_dts' name="vehicleModel" placeholder='Vehicle Model' value={profileData.vehicleModel} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" className='vehicle_dts' name="licensePlateNumber" placeholder='License Plate Number' value={profileData.licensePlateNumber} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" className='vehicle_dts' name="emergencyContact" placeholder='Emergency Contact Number' value={profileData.emergencyContact} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" className='vehicle_dts' name="emergencyName" placeholder="Contact Person's Name" value={profileData.emergencyName} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" className='vehicle_dts' name="relation" placeholder='Relationship' value={profileData.relation} onChange={handleInputChange} disabled={!editMode} />
                {editMode ? (
                  <>
                    <button className='save_btn' onClick={handleSaveProfile}>Save</button>
                    <button className='cancel_btn' onClick={() => setEditMode(false)}>Cancel</button>
                  </>
                ) : (
                  <button className='edit_btn' onClick={() => setEditMode(true)}>Edit</button>
                )}
              </div>
              <div className="pf_right_below">
                <h2 className='my_profile' id='user_pf'> Your Current Location </h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
