// BatteryRoute.js
const express = require("express");
const router = express.Router();
const BatteryDetailsModel = require("../Models/BatteryModel");
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

router.post("/submitBatteryForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        currBatteryType,
        prefBatteryType,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        add_note,
        status
      } = req.body;
  
      const batteryDetails = new BatteryDetailsModel({
        fullName,
        email,
        currBatteryType,
        prefBatteryType,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        add_note,
        status
      });
  
      await batteryDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

router.get("/getBatteryRequests", async (req, res) => {
    try {
      const requests = await BatteryDetailsModel.find();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching battery requests:", error);
      res.status(500).json({ error: "An error occurred while fetching battery requests." });
    }
});


router.put("/updateRequestStatus/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;

    await BatteryDetailsModel.findByIdAndUpdate(requestId, { status });
    res.status(200).json({ message: "Request status updated successfully." });
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "An error occurred while updating request status." });
  }
});

router.get("/getBatteryHistory", async (req, res) => {
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
      
      // Fetch battery history for the current user
      const history = await BatteryDetailsModel.find({ email: user.email, status: { $ne: '' } });
      res.json(history);
  } catch (error) {
      console.error("Error fetching battery history:", error);
      res.status(500).json({ error: "An error occurred while fetching battery history." });
  }
});


module.exports = router;
