import React, { useState } from 'react';
import HorizontalBar from './HorizontalBar';
import '../css/Profile.css';
import pfimg from '../../assests/profile.jpg';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Profile = () => {
  const [userData, setUserData] = useState({
    Name: 'Fetch backend name',
    Email: 'default@example.com',
    Phone: '+91 1234578907',
    Gender: 'Male',
    Address: 'Apartment',
    Zipcode: 12356,
    City: 'Pune',
    State: 'Maharashtra',
    Password: 'abc123'
  });

  const [isUpdatePassw, setUpdatePassw] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({ ...userData });
  const [profileImage, setProfileImage] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...updatedUserData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedUserData({ ...userData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    if (currentPassword === userData.Password) {
      setUserData({ ...userData, Password: newPassword });
      setNewPassword('');
      setUpdatePassw(false);
      setPasswordError('');
    } else {
      setPasswordError('Current password is incorrect.');
    }
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
              <p className='name_email'> {userData.Name} </p>
              <p className='name_email'> {userData.Email} </p>
              <p className='name_email'> {userData.Phone} </p>
            </div>
          </div>
          <div className="right_side">
            <div className="profile_right">
              <h2 className='my_profile' id='user_pf'>User Profile</h2>
              <table className="profile-table">
                <tbody>
                  {Object.entries(userData).map(([key, value]) => {
                    if (key === 'Name' || key === 'Email' || key === 'Phone') return null;
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>
                          {isEditing ? (
                            <input type="text" name={key} value={updatedUserData[key]} onChange={handleChange} />
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {isEditing ? (
                <>
                  <button className='save_btn' onClick={handleSave}>Save</button>
                  <button className='cancel_btn' onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button className='edit_btn' onClick={handleEdit}>Edit</button>
              )}
            </div>

            <div className="pf_right_below">
              <h2 className='my_profile' id='user_pf'> Want to change your password? </h2>
              {!isUpdatePassw && (
                <div>
                  <label className='curr_passw'> Current Password</label>
                  <p className='inp_curr_passw'> {userData.Password.replace(/./g, '*')} </p>
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
                    <span className="toggle-password" onClick={toggleShowNewPassword}>{showNewPassword ? <FaRegEye /> : <FaRegEyeSlash /> }</span>
                  </div>
                  <button className='save_btn' onClick={handlePasswordChange}>Save</button>
                  <button className='cancel_btn' onClick={toggleUpdatePassword}>Cancel</button>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
