import React from 'react';
import ServiceCard from './ServiceCard';
import './css/Services.css';

import backgroundImage from '../assests/headerservicesimg.jpeg'; // Update the path to the image
import fuelImg from '../assests/fuelimage.jpeg';
import batteryImg from '../assests/batteryimage.jpeg'; // Update the path to the battery image
import towImg from '../assests/towimage.jpeg';
import tyreImg from '../assests/tyreimage.webp';
// import Footer from './Footer';

const servicesData = [
    {
        imgUrl: fuelImg,
        title: "Fuel",
        desc: "Get fuel delivery service on the spot.",
        requestLink: "/fuelrequest"
    },
    {
        imgUrl: batteryImg,
        title: "Battery Change",
        desc: "Get your vehicle's battery replaced wherever you are.",
        requestLink: "/batteryrequest"
    },
    {
        imgUrl: towImg,
        title: "Tow the Car",
        desc: "Tow your vehicle to the nearest service center.",
        requestLink: "/towrequest"
    },
    {
        imgUrl: tyreImg,
        title: "Tyre Change",
        desc: "Replace your vehicle's tyre at your location.",
        requestLink: "/tyrerequest"
    }
];

const Services = () => {
    return (
        <div className="services-container">
            <div className="header-image">
                <img src={backgroundImage} alt="Background Image" style={{ width: '100%', height: 'auto' }} />
                <h2>Our Services</h2>
                {/* Optional: You can add content or additional images here */}
            </div>
            <div className="service__list">
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
            {/* <div className="footer">
            <Footer />
            </div> */}
            
        </div>
    );
};

export default Services;
