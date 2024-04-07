import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css'; // Import your footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Contact Us Section */}
          <Col md={4} className="footer-section">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <ul>
                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Empire Building, Pune, Maharashtra</li>
                <li><FontAwesomeIcon icon={faPhone} /> +91 12123 45456</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> revive@gmail.com</li>
              </ul>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-section">
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </Col>

          {/* Follow Us Section */}
          <Col md={4} className="footer-section">
            <div className="social-media">
              <h3>Follow Us</h3>
              <ul>
                <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        {/* Footer Bottom Section */}
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Car Service. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

