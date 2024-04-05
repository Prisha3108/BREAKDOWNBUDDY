import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiUser, FiClock, FiMessageSquare, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons
import '../css/HorizontalBar.css';

const HorizontalBar = ({ serviceLink }) => {
  return (
    <div className='horizontal_bar'>
      <div className='all_buttons'>

        <Link to={serviceLink} className='bar_button'><FiSettings /> 
        <p> Service Form </p> </Link>
        <Link to={'/profile'} className='bar_button'><FiUser /> 
        <p> Profile </p> </Link>
        <Link to={'/history'} className='bar_button'><FiClock /> 
        <p> History </p> </Link>
        <Link to={'/feedback'} className='bar_button'><FiMessageSquare /> 
        <p> Feedback </p> </Link>
        <Link to={'/'} className='bar_button'><FiLogOut /> 
        <p> Signout </p> </Link>
      </div>
    </div>
  );
};

export default HorizontalBar;
