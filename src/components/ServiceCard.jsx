import React from 'react';
import './css/ServiceCard.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, isLoggedIn }) => {
    const { imgUrl, title, desc, requestLink } = service;
    const navigate = useNavigate();

    const handleRequest = () => {
        if (isLoggedIn) {
            // Navigate to the request page if the user is logged in
            navigate(requestLink);
        } else {
            // Redirect to the login page if the user is not logged in
            navigate('/login');
        }
    };

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
            <button className="requestButton" onClick={handleRequest}>REQUEST</button>
        </div>
    );
};

export default ServiceCard;
