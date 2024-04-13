import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DemoProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/data');
      // Handle response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/data', { name, email, password });
      // Handle response data
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editMode ? name : formData?.name || ''}
        onChange={handleChange}
        disabled={!editMode}
      />
      <input
        type="email"
        name="email"
        value={editMode ? email : formData?.email || ''}
        onChange={handleChange}
        disabled={!editMode}
      />
      <input
        type="password"
        name="password"
        value={editMode ? password : formData?.password || ''}
        onChange={handleChange}
        disabled={!editMode}
      />
      {editMode ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default DemoProfile;
