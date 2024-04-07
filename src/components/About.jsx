import React from "react";
import Doctor from "../assests/about.jpeg";
import SolutionStep from "./SolutionStep";
import "./css/About.css"

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Revive Car Assistance was founded with a simple yet powerful mission: to provide reliable and efficient car assistance services that give drivers peace of mind on the road. With years of experience in the automotive industry, our team recognized the need for a service that goes beyond traditional roadside assistance – one that prioritizes customer satisfaction and delivers top-notch service every time.

        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Make a Request"
          description="When you find yourself in need, reach out to Revive Car Assistance with ease. Our dedicated team of professionals is ready to provide swift and reliable roadside assistance, ensuring you're back on the road in no time."
        />

        <SolutionStep
          title="Fill the details"
          description="Select the time and location convenient for you, and let our responsive team of car care experts handle the rest. With Revive, you can trust that your vehicle will receive the attention it deserves, tailored to your schedule and preferences."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Count on Revive's seasoned technicians and specialists to deliver expert diagnosis and personalized solutions for your car troubles. We're here to ensure your vehicle receives the care it needs to keep you moving forward safely and confidently."
        />
      </div>
    </div>
  );
}

export default About;