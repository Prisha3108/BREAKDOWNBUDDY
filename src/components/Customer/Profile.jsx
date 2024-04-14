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
    Password: ''

  });
  const [editMode, setEditMode] = useState(false);
  const [isUpdatePassw, setUpdatePassw] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        // Fetch user data
        const userResponse = await axios.get('http://localhost:8000/auth/user', config);
        const userData = userResponse.data;
        setMyUserData(userData);

        // Fetch user profile data
        const profileResponse = await axios.get('http://localhost:8000/myprofile/profile', config);
        setProfileData(profileResponse.data);
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

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const profileDataToUpdate = {
        email: myuserData.email, // Add email field
        name: myuserData.fullName,
        mobileNo: myuserData.mobileNo,
        gender: profileData.gender,
        address: profileData.address,
        zipcode: profileData.zipcode,
        city: profileData.city,
        state: profileData.state
      };

      await axios.post('http://localhost:8000/myprofile/profile', profileDataToUpdate, config);
      setEditMode(false);
    } catch (error) {
      console.error('Error saving profile:', error);
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

  const toggleUpdatePassword = () => {
    setUpdatePassw(!isUpdatePassw);
    // Reset password fields and error on toggle
    setNewPassword('');
    setCurrentPassword('');
    setPasswordError('');
  };

  const handlePasswordChange = () => {
    // Here you would implement the logic to check if the current password matches
    // if (currentPassword === Password) {
    //   // setUserData({ Password: newPassword });
    //   setNewPassword('');
    //   setUpdatePassw(false);
    //   setPasswordError('');
    // } else {
    //   setPasswordError('Current password is incorrect.');
    // }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
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
                <input type="text" className='name_email' name="fullName" placeholder='Name' id='name' value={myuserData.fullName} onChange={handleInputChange} disabled />
                <input type="text" className='name_email' name="email" placeholder='Email' id='email' value={myuserData.email} onChange={handleInputChange} disabled />
                <input type="text" className='name_email' name="mobileNo" placeholder='Mobile No.' id='phone' value={myuserData.mobileNo} onChange={handleInputChange} disabled />
                
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="profile_right">
              <h2 className='my_profile' id='user_pf'>Car Details</h2>
              <div>
                <input type="text" name="vehicleModel" />
                <input type="text" name="licensePlateNumber" />
                <input type="text" name="emergencyContact" placeholder='Enter your emergency contact number' />
                <input type="text" name="relation" placeholder='Enter relation with that person' />
                <input type="text" name="emergencyName" placeholder="Enter contact person's name" />
                <button onClick={() => setEditMode(true)}>Edit</button>

                <div className="pf_right_below">
                  <h2 className='my_profile' id='user_pf'> Want to change your password? </h2>
                  {!isUpdatePassw && (
                    <div>
                      <label className='curr_passw'> Current Password</label>
                      <p className='inp_curr_passw'> {profileData.Password.replace(/./g, '*')} </p>
                      <button className='update_passw' onClick={toggleUpdatePassword}>Update Password</button>
                    </div>
                  )}
                  {isUpdatePassw && (
                    <div>
                      <label className='curr_passw'> Enter Current Password</label>
                      <input type="password" className='inp_curr_passw' placeholder='Enter your current password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                      {passwordError && <p className="password-error">{passwordError}</p>}
                      <label className='curr_passw'> Enter New Password</label>
                      <div className="password-input">
                        <input type={showNewPassword ? "text" : "password"} className='inp_curr_passw' placeholder='Enter your new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        <span className="toggle-password" onClick={toggleShowNewPassword}>{showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                      </div>
                      <button className='save_btn' onClick={handlePasswordChange}>Save</button>
                      <button className='cancel_btn' onClick={toggleUpdatePassword}>Cancel</button>

                    </div>
                  )}
                </div>


                {/* {editMode ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                  </>
                ) : ( */}
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
