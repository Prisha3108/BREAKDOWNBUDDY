// FuelModel.js
const mongoose = require("mongoose");

// Define Schema for fuelDetails collection
const FuelDetailsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  vehicleModel: String,
  licensePlateNumber: String,
  fuelAmount: Number,
  fuelType: String,
  currentLocation: String,
  additionalNote: String,
},
{timestamps: true}
);

const FuelDetailsModel = mongoose.model("FuelDetails", FuelDetailsSchema);

module.exports = FuelDetailsModel;
