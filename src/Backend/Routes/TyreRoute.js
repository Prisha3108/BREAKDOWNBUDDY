const express = require("express");
const router = express.Router();
const TyreDetailsModel = require("../Models/TyreModel");

router.post("/submitTyreForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        numTyreReq,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        add_note,
        status
      } = req.body;
  
      const tyreDetails = new TyreDetailsModel({
        fullName,
        email,
        numTyreReq,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        add_note,
        status
      });
  
      await tyreDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

router.get("/getTyreRequests", async (req, res) => {
    try {
      const requests = await TyreDetailsModel.find();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching tyre requests:", error);
      res.status(500).json({ error: "An error occurred while fetching tyre requests." });
    }
});


router.put("/updateRequestStatus/:id", async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;

    await TyreDetailsModel.findByIdAndUpdate(requestId, { status });
    res.status(200).json({ message: "Request status updated successfully." });
  } catch (error) {
    console.error("Error updating request status:", error);
    res.status(500).json({ error: "An error occurred while updating request status." });
  }
});

router.get("/getTyreHistory", async (req, res) => {
    try {
      const history = await TyreDetailsModel.find({ status: { $ne: '' } });
      res.json(history);
    } catch (error) {
      console.error("Error fetching tyre history:", error);
      res.status(500).json({ error: "An error occurred while fetching tyre history." });
    }
});


module.exports = router;
