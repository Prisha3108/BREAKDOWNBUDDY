import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiUser, FiClock, FiMessageSquare, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons
import '../css/HorizontalBar.css';

const HorizontalBar = ({}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [historyDropdownOpen, setHistoryDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleHistoryDropdown = () => {
    setHistoryDropdownOpen(!historyDropdownOpen);
  };

  return (
    <div className='horizontal_bar'>
      <div className='all_buttons'>

        <div className={`bar_button ${dropdownOpen ? 'active-link' : ''}`} onClick={toggleDropdown}>
          <FiSettings /> 
          <p> Service Form </p>
          {dropdownOpen && (
            <div className='dropdown'>
              <Link to={'/fuelrequest'} className='dropdown-link'>Fuel Request Form</Link>
              <Link to={'/batteryrequest'} className='dropdown-link'>Battery Request Form</Link>
              <Link to={'/towrequest'} className='dropdown-link'>Tow Request Form</Link>
              <Link to={'/tyrerequest'} className='dropdown-link'>Tyre Request Form</Link>
            </div>
          )}
        </div>

        <Link to={'/profile'} className='bar_button'><FiUser /> 
        <p> Profile </p> </Link>

        <div className={`bar_button ${historyDropdownOpen ? 'active-link' : ''}`} onClick={toggleHistoryDropdown}>
          <FiClock /> 
          <p> History </p>
          {historyDropdownOpen && (
            <div className='dropdown'>
              <Link to={'/fuelhistory'} className='dropdown-link'>Fuel History </Link>
              <Link to={'/batteryhistory'} className='dropdown-link'>Battery History </Link>
              <Link to={'/towhistory'} className='dropdown-link'>Tow History </Link>
              <Link to={'/tyrehistory'} className='dropdown-link'>Tyre History </Link>
            </div>
          )}
        </div>

        <Link to={'/feedback'} className='bar_button'><FiMessageSquare /> 
        <p> Feedback </p> </Link>

        <Link to={'/'} className='bar_button'><FiLogOut /> 
        <p> Signout </p> </Link>
      </div>
    </div>
  );
};

export default HorizontalBar;
