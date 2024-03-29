import React from 'react';
import ServiceCard from './ServiceCard';
import './css/Services.css';

import backgroundImage from '../assests/carimg.jpeg'; // Update the path to the background image
import fuelImg from '../assests/fuelimage.jpeg';
import batteryImg from '../assests/batteryimage.jpeg'; // Update the path to the battery image
import towImg from '../assests/towimage.jpeg';
import tyreImg from '../assests/tyreimage.webp';

const servicesData = [
    {
        imgUrl: fuelImg,
        title: "Fuel",
        desc: "Get fuel delivery service on the spot."
    },
    {
        imgUrl: batteryImg,
        title: "Battery Change",
        desc: "Get your vehicle's battery replaced wherever you are."
    },
    {
        imgUrl: towImg,
        title: "Tow the Car",
        desc: "Tow your vehicle to the nearest service center."
    },
    {
        imgUrl: tyreImg,
        title: "Tyre Change",
        desc: "Replace your vehicle's tyre at your location."
    }
];

const Services = () => {
    return (
        <div className="services-container">
            <div className="header-image" style={{backgroundImage: `url(${backgroundImage})`}}>
                {/* You can place additional content here if needed */}
            </div>
            <h2>Our Services</h2>
            <div className="service__list">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
