// Feedback.jsx
import HorizontalBar from './HorizontalBar'
import '../css/Feedback.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../../assests/feedback.png';
import Lottie from 'lottie-react';
import animationData from '../../assests/FBAnimation.json'


const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s3blufn', 'template_5sqngz6', form.current, {
        publicKey: 'zvW5VBOawqlXpFzp8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='feedbackreq'>
      <HorizontalBar />
      <div className="feedback_form">
        <div className="fd_img">

          <Lottie animationData={animationData} className="feedback_image" />
        </div>

        <div className="form_fb">
          <form ref={form} onSubmit={sendEmail} className='give_feedback'>
              <div className="customer_name">
                <label className='review'>Name: </label>
                <input type="text" name="from_name" className='review_name' placeholder='Enter your name' required />
              </div>

              <div className="customer_email">
                <label className='review'>Email: </label>
                <input type="email" name="from_name" className='review_email' placeholder='Enter your email' required />
              </div>

              <div className="customer_msg">
                <label className='review' id='review_msg'>Message: </label>
                <textarea name="message" className='review_msg' placeholder='Enter your message' required />
              </div>

              <button type="submit" value="Send" className='review_submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback