// ContactForm.jsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import img from '../../assests/contactus.png';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/contactus/contactdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, text })
      });
      if (response.ok) {
        console.log('Contact form data submitted successfully');
        // reset the form fields here
        setName('');
        setEmail('');
        setText('');
      } else {
        console.error('Failed to submit contact form data');
      }
    } catch (error) {
      console.error('Error submitting contact form data:', error);
    }
  };

  return (
    <section className={styles.form_section}>
      <div className={styles.contactus}>
        <div className={styles.contact_section}>
          <h1>CONTACT US</h1>
          <p>
            Let's connect: we're here to help, and we'd love to hear from you! <br /> You can reach out to us through
            the contact form given below.
          </p>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="John Peter" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" placeholder="Write Description" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.contact_submit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={img} alt="Contact Us" />
      </div>
    </section>
  );
};

export default ContactForm;
