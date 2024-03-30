import React, { useState, useEffect } from 'react'
import HorizontalBar from './HorizontalBar'
import '../css/Profile.css'

const Profile = () => {
  const [userData, setUserData] = useState({
    Name: 'Fetch backend name',
    Email: 'default@example.com',
    Gender: 'Male',
    Address: 'Apartment',
    Zipcode: 12356,
    City: 'Pune',
    State: 'Maharashtra'
  });

  // State variable to track if editing mode is enabled
  const [isEditing, setIsEditing] = useState(false);

  // State variables to store updated user data
  const [updatedUserData, setUpdatedUserData] = useState({ ...userData });

  // Function to handle enabling editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle saving changes
  const handleSave = () => {
    setUserData({ ...updatedUserData });
    setIsEditing(false);
  };

  // Function to handle canceling editing mode
  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedUserData({ ...userData });
  };

  // Function to handle updating user data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <HorizontalBar/>
    <div className="profile_page">
    <div className="profile-container">
      <h2 className='user_profile'>User Profile</h2>
      <table className="profile-table">
        <tbody>
          {Object.entries(userData).map(([key, value]) => (
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
          ))}
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
    </div>
    </div>
  );
}

export default Profile
