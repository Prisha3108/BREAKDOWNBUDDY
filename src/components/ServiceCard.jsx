import React from 'react';
import './css/ServiceCard.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { imgUrl, title, desc, requestLink } = service;
    const navigate = useNavigate();

    const handleRequest = () => {
        // Navigate to the request page wahen the REQUEST button is clicked
        navigate(requestLink);
    };

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
            <button className="requestButton" onClick={handleRequest}>REQUEST</button> {/* Add a button labeled "REQUEST" */}
        </div>
    );
};

export default ServiceCard;
