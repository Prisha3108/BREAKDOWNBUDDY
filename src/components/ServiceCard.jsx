import React from 'react';
import './css/ServiceCard.css'; // Assuming you have a CSS file for styling

const ServiceCard = ({ service }) => {
    const { imgUrl, title, desc } = service;

    const handleRequest = () => {
        // Define the behavior when the REQUEST button is clicked
        console.log(`Requested ${title}`);
        // You can add your request logic here
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
