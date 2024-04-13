const express = require('express');
const router = express.Router();
const Profile = require('../Models/ProfileModel');
const auth = require('../Controllers/auth');

router.get('/profile', auth, async (req, res) => {
  try {
    // Get the user's email from the request object
    const userEmail = req.user.email;

    // Fetch the profile data based on the user's email
    let profile = await Profile.findOne({ email: userEmail });
    
    // If no profile exists, create a new one
    if (!profile) {
      profile = new Profile({ email: userEmail });
      await profile.save();
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/profile', auth, async (req, res) => {
  try {
    const { name, email, mobileNo, gender, address, zipcode, city, state } = req.body;
    const userEmail = req.user.email;

    let profile = await Profile.findOne({ email: userEmail });

    // If profile doesn't exist, create a new one
    if (!profile) {
      profile = new Profile({ email: userEmail, name, mobileNo, gender, address, zipcode, city, state });
    } else {
      // If profile exists, update it
      profile.name = name;
      profile.mobileNo = mobileNo;
      profile.gender = gender;
      profile.address = address;
      profile.zipcode = zipcode;
      profile.city = city;
      profile.state = state;
    }

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
