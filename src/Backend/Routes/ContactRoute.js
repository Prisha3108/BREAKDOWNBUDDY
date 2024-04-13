// contactRoute.js
const express = require('express');
const router = express.Router();
const Contact = require('../Models/ContactModel');

router.post('/contactdetails', async (req, res) => {
  try {
    const { name, email, text } = req.body;
    const newContact = new Contact({ name, email, text });
    await newContact.save();
    res.status(201).json({ message: 'Contact form data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
