import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar'; // Assuming Navbar is defined
import './css/Homepage.css';
import heroImg from '../assests/Unknown.jpeg';
import heroImg02 from '../assests/VistaCarService.jpg';
import heroVideo from '../assests/carvideo.mp4';

function Homepage() {
    return (
        <>
            <section>
                <Container fluid className="home-page-container hero-container">
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                </div>
                                <h1 className="fade-in-text">Welcome to Revive Roadside Assistance </h1>
                                <p>
                                    At Revive, we understand that car troubles can happen when you least expect them. That's why we're here to provide reliable and efficient roadside assistance whenever you need it. Whether you've experienced a flat tire, battery failure, or any other roadside emergency, our team of professionals is just a click away.
                                </p>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                                <img src={heroImg02} alt="" />
                                <video src={heroVideo} alt="" autoPlay muted loop controls />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        {/* Assuming ServiceList is defined */}
                        {/* <ServiceList /> */}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Homepage;
