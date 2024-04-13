// userauthRoute.js
const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());
app.use(express.json());

router.post('/register', async (req, res) => {
    const { email, fullName, password, mobileNo } = req.body;
    try {
      // Check if user already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user
      const encryptedPassw = await bcrypt.hash(password, 10);
      const newUser = new User({ email, fullName, password: encryptedPassw, mobileNo });
      await newUser.save();
  
      const token = jwt.sign({ id: newUser._id, email, fullName, mobileNo }, 'newkyewuehh', { expiresIn: '90d' });
  
      // Send token and user info back to client
      res.status(201).json({ token, user: newUser, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, 'newkyewuehh', { expiresIn: '90d' });

        // Send token, user info, and email back to client
        res.status(200).json({ token, user, userEmail: user.email, message: "Login successful" });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



router.get('/user', async (req, res) => {
    try {
      // Get the token from the request headers
      const token = req.headers.authorization.split(' ')[1]; // Assuming token is sent in the format: Bearer <token>
      
      // Verify the token
      const decodedToken = jwt.verify(token, 'newkyewuehh');
      
      // Find the user based on the decoded token
      const user = await User.findById(decodedToken.id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
        
      // Return the user's data
      res.status(200).json({
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobileNo: user.mobileNo
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;


