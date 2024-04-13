import React, { useState, useEffect } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/Profile.css';
import pfimg from '../../assests/profile.jpg';
import axios from 'axios';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [myuserData, setMyUserData] = useState({
    fullName: '',
    email: '',
    mobileNo: ''
  });
  const [profileData, setProfileData] = useState({
    gender: '',
    address: '',
    zipcode: '',
    city: '',
    state: ''
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
                <input type="text" name="fullName" placeholder='Name' id='name' value={myuserData.fullName} onChange={handleInputChange} disabled />
                <input type="text" name="email" placeholder='Email' id='email' value={myuserData.email} onChange={handleInputChange} disabled />
                <input type="text" name="mobileNo" placeholder='Mobile No.' id='phone' value={myuserData.mobileNo} onChange={handleInputChange} disabled />
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="profile_right">
              <h2 className='my_profile' id='user_pf'>User Profile</h2>
              <div>
                <input type="text" name="gender" value={editMode ? profileData.gender : profileData.gender} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" name="address" value={editMode ? profileData.address : profileData.address} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" name="zipcode" value={editMode ? profileData.zipcode : profileData.zipcode} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" name="city" value={editMode ? profileData.city : profileData.city} onChange={handleInputChange} disabled={!editMode} />
                <input type="text" name="state" value={editMode ? profileData.state : profileData.state} onChange={handleInputChange} disabled={!editMode} />
                {editMode ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => setEditMode(true)}>Edit</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
