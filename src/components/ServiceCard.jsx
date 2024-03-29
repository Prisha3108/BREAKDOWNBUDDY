import React from 'react';
import './css/ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { imgUrl, title, desc } = service;

    return (
        <div className="service__item">
            <div className="service__img">
                <img src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceCard;
