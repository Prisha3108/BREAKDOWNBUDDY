import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import InformationCard from './InformationCard'; 
import { faGasPump, faCarBattery, faTruckPickup, faTools } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './css/Info.css';

import fuelImage from '../assests/fuel.webp'; // Import the image for fuel
import batteryImage from '../assests/battery.webp'; // Import the image for battery
import towingImage from '../assests/tow.webp'; // Import the image for towing
import tyreImage from '../assests/Tyre.webp'; // Import the image for tire

function Info() {
  const services = [
    { 
      title: 'Fuel Refill', 
      description: "Whether you've run out of fuel or need a top-up, our team will promptly deliver fuel to your location, ensuring you're back on the road in no time.", 
      icon: faGasPump,
      imageSrc: fuelImage // Assign the image source for fuel
    },
    { 
      title: 'Battery Replacement', 
      description: "If your vehicle's battery has failed, we'll provide on-the-spot battery replacement services to get your vehicle running smoothly again.", 
      icon: faCarBattery,
      imageSrc: batteryImage // Assign the image source for battery
    },
    { 
      title: 'Towing Service', 
      description: "In the event of a breakdown or accident, our towing service will safely transport your vehicle to the nearest repair facility, ensuring minimal disruption to your journey.", 
      icon: faTruckPickup,
      imageSrc: towingImage // Assign the image source for towing
    },
    { 
      title: 'Tyre Change', 
      description: "Whether you have a flat tire or need assistance with a tire change, our team will swiftly replace your tire, getting you back on the road safely.", 
      icon: faTools,
      imageSrc: tyreImage // Assign the image source for tire
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Services</span>
        </h3>
        <p className="info-description">
          We provide comprehensive road vehicle assistance services, tailored to your needs. Our experienced team is dedicated to ensuring your safety and convenience on the road.
        </p>
      </div>
      <Container className="info-container">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <InformationCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageSrc={service.imageSrc} // Pass the image source to InformationCard
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Info;
