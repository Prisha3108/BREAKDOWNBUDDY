import React, { useEffect, useState } from "react";
import Doctor from "../assests/VistaCarService.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "./css/Hero.css"


function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Best Car Service</p>
          <h2 className="text-title">
          Welcome to Revive Car Assistance
          </h2>
          <p className="text-descritpion">
          When your car encounters trouble on the road, it's not just an inconvenience – it can disrupt your entire day. At Revive, we understand the frustration and stress that comes with unexpected car issues. That's why we're here to offer reliable, efficient, and hassle-free assistance whenever you need it.</p>
          <p className="text-descritpion">
          At Revive, we're more than just a car assistance company – we're your trusted partners in keeping your vehicle running smoothly. Our team consists of skilled technicians, experienced roadside assistance professionals, and dedicated customer service representatives who are committed to delivering excellence in everything we do.</p>       
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>114k+</p>
              <p>Receive Cusomers</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Mechanics</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;