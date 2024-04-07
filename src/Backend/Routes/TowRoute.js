const express = require("express");
const router = express.Router();
const TowDetailsModel = require("../Models/TowDetailsModel");

router.post("/submitForm", async (req, res) => {
  try {
    const {
      fullName,
      email,
      vehicleModel,
      licensePlateNumber,
      towReason,
      currentLocation,
      destination,
      add_note,
      status
    } = req.body;

    const towDetails = new TowDetailsModel({
      fullName,
      email,
      vehicleModel,
      licensePlateNumber,
      towReason,
      currentLocation,
      destination,
      add_note,
      status
    });

    await towDetails.save();
    res.status(200).json({ message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving form data." });
  }
});

router.get("/getTowRequests", async (req, res) => {
    try {
      const requests = await TowDetailsModel.find();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching tow requests:", error);
      res.status(500).json({ error: "An error occurred while fetching tow requests." });
    }
});


router.put("/updateRequestStatus/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;

    await TowDetailsModel.findByIdAndUpdate(requestId, { status });
    res.status(200).json({ message: "Request status updated successfully." });
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "An error occurred while updating request status." });
  }
});

router.get("/getTowHistory", async (req, res) => {
    try {
      const history = await TowDetailsModel.find({ status: { $ne: '' } });
      res.json(history);
    } catch (error) {
      console.error("Error fetching tow history:", error);
      res.status(500).json({ error: "An error occurred while fetching tow history." });
    }
});


module.exports = router;
