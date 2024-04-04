// Server.jsx
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const TowDetailsModel = require("./TowDetailsModel"); 
const FuelDetailsModel = require("./FuelModel");
const TyreDetailsModel = require("./TyreModel");
const BatteryDetailsModel = require("./BatteryModel");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS for all routes


// Connect to MongoDB
async function connectToDB() {
  try {
    const conn = await mongoose.connect(
        'mongodb+srv://rirathore:mongo123@cluster0.3lbispc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`DB connected`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectToDB();


// Define POST endpoint to handle TOW form submission
app.post("/submitForm", async (req, res) => {
  try {
    const {
      fullName,
      email,
      vehicleModel,
      licensePlateNumber,
      towReason,
      currentLocation,
      destination,
      additionalNote,
    } = req.body;

    const towDetails = new TowDetailsModel({
      fullName,
      email,
      vehicleModel,
      licensePlateNumber,
      towReason,
      currentLocation,
      destination,
      additionalNote,
    });

    await towDetails.save();
    res.status(200).json({ message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving form data." });
  }
});

// Define POST endpoint to handle FUEL form submission
app.post("/submitFuelForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        vehicleModel,
        licensePlateNumber,
        fuelAmount,
        fuelType,
        currentLocation,
        additionalNote,
      } = req.body;
  
      const fuelDetails = new FuelDetailsModel({
        fullName,
        email,
        vehicleModel,
        licensePlateNumber,
        fuelAmount,
        fuelType,
        currentLocation,
        additionalNote,
      });
  
      await fuelDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

// Define POST endpoint to handle TYRE form submission
app.post("/submitTyreForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        numTyreReq,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        additionalNote,
      } = req.body;
  
      const tyreDetails = new TyreDetailsModel({
        fullName,
        email,
        numTyreReq,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        additionalNote,
      });
  
      await tyreDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

// Define POST endpoint to handle BATTERY form submission
app.post("/submitBatteryForm", async (req, res) => {
    try {
      const {
        fullName,
        email,
        currBatteryType,
        prefBatteryType,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        additionalNote,
      } = req.body;
  
      const batteryDetails = new BatteryDetailsModel({
        fullName,
        email,
        currBatteryType,
        prefBatteryType,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        additionalNote,
      });
  
      await batteryDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });



// Start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
