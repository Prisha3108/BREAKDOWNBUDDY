const express = require('express');
const router = express.Router();
const auth = require('../Controllers/auth'); // Import authentication middleware
const Profile = require('../Models/ProfileModel'); // Import Profile model

// Endpoint to fetch profile data
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id; // Get user id from authenticated request

    // Find profile by user id
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to update profile data
router.post('/update', auth, async (req, res) => {
  try {
    const userId = req.user.id; // Get user id from authenticated request
    const { fullName, email, mobileNo, vehicleModel, licensePlateNumber, emergencyContact, relation, emergencyName } = req.body;

    // Check if profile exists for the current user
    let profile = await Profile.findOne({ userId });

    // If profile doesn't exist, create a new one
    if (!profile) {
      profile = new Profile({ userId, fullName, email, mobileNo, vehicleModel, licensePlateNumber, emergencyContact, relation, emergencyName });
    } else {
      // If profile exists, update the fields
      profile.fullName = fullName;
      profile.email = email;
      profile.mobileNo = mobileNo;
      profile.vehicleModel = vehicleModel;
      profile.licensePlateNumber = licensePlateNumber;
      profile.emergencyContact = emergencyContact;
      profile.relation = relation;
      profile.emergencyName = emergencyName;
    }

    // Save the profile
    await profile.save();

    res.status(200).json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


