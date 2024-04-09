// MechauthRoute.js

const express = require('express');
const router = express.Router();
const Mechanic = require('../Models/MechanicModel');

router.post('/mechregister', async (req, res) => {
  const { email, fullName, password, mobileNo, type } = req.body;
  try {
    // Check if user already exists
    let existingMechanic = await Mechanic.findOne({ email });
    if (existingMechanic) {

      return res.status(400).json({ message: 'Mechanic already exists' });
    }

    // Create a new user
    const newUser = new Mechanic({ email, fullName, password, mobileNo, type });
    await newUser.save();

    res.status(201).json({ message: 'Mechanic is registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/mechlogin', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const mechanic = await Mechanic.findOne({ email });
    if (!mechanic) {
      return res.status(404).json({ message: 'mechanic not found' });
    }

    // Check if password is correct
    if (mechanic.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;