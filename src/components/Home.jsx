import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaClock, FaUserTie, FaHandHoldingUsd, FaRegLightbulb } from 'react-icons/fa'; // Import icons
import './css/Homepage.css';
import heroImg03 from '../assests/tow.webp'; // Specify the path to OtherImage1
import heroImg04 from '../assests/Tyre.webp'; // Specify the path to OtherImage2
import heroImg05 from '../assests/battery.webp';
import heroImg06 from '../assests/fuel.webp';
import heroImg07 from '../assests/key.webp'; // Specify the path to OtherImage3
import Reviews from './Reviews'; // Import the Reviews component
import Hero from './Hero';
import About from './About';
import Info from './Info';

function Homepage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const services = [
        { name: "Towing", image: heroImg03 },
        { name: "Flat Tire Assistance", image: heroImg04 },
        { name: "Battery Jumpstart", image: heroImg05 },
        { name: "Fuel Delivery", image: heroImg06 },
        { name: "Lockout Service", image: heroImg07 }
    ];

    return (
        <>
            <Hero/>
            <About/>
            <Info/>
            
            <section>
                <Container>
                    <Row>
                        
                        <Col lg='9'>
                            <div className="why-choose-us">
                                <h2 className="choose-us-heading">Why Choose Us?</h2>
                                <div className="choose-us-list">
                                    <div className="choose-us-item">
                                        <FaClock className="choose-us-icon" />
                                        <p>24/7 Availability: Car troubles don't adhere to a schedule, which is why our services are available round the clock. Day or night, we're here to assist you.</p>
                                    </div>
                                    <div className="choose-us-item">
                                        <FaHandHoldingUsd className="choose-us-icon" />
                                        <p>Transparent Pricing: We believe in honest and transparent pricing. You'll know exactly what to expect before any work is done, with no hidden fees or surprises.</p>
                                    </div>
                                    <div className="choose-us-item">
                                        <FaUserTie className="choose-us-icon" />
                                        <p>Professionalism: Our team consists of highly trained professionals who are dedicated to providing top-notch service with a friendly attitude.</p>
                                    </div>
                                    <div className="choose-us-item">
                                        <FaRegLightbulb className="choose-us-icon" />
                                        <p>Expertise: With years of experience in the field, we have the expertise to handle any roadside assistance situation efficiently and effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Include the Reviews component here */}
            <section className="reviews-section">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="reviews-heading">Customer Reviews</h2>
                            <Reviews /> {/* Use the Reviews component here */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Homepage;
