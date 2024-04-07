const express = require("express");
const router = express.Router();
const FuelDetailsModel = require("../Models/FuelModel");

router.post("/submitFuelForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        vehicleModel,
        licensePlateNumber,
        fuelAmount,
        fuelType,
        currentLocation,
        add_note,
        status
      } = req.body;
  
      const fuelDetails = new FuelDetailsModel({
        fullName,
        email,
        vehicleModel,
        licensePlateNumber,
        fuelAmount,
        fuelType,
        currentLocation,
        add_note,
        status
      });
  
      await fuelDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

router.get("/getFuelRequests", async (req, res) => {
    try {
      const requests = await FuelDetailsModel.find();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching fuel requests:", error);
      res.status(500).json({ error: "An error occurred while fetching fuel requests." });
    }
});


router.put("/updateRequestStatus/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;

    await FuelDetailsModel.findByIdAndUpdate(requestId, { status });
    res.status(200).json({ message: "Request status updated successfully." });
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "An error occurred while updating request status." });
  }
});

router.get("/getFuelHistory", async (req, res) => {
    try {
      const history = await FuelDetailsModel.find({ status: { $ne: '' } });
      res.json(history);
    } catch (error) {
      console.error("Error fetching fuel history:", error);
      res.status(500).json({ error: "An error occurred while fetching fuel history." });
    }
});


module.exports = router;
