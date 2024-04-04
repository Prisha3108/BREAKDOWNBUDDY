// BatteryModel.js
const mongoose = require("mongoose");

// Define Schema for fuelDetails collection
const BatteryDetailsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  currBatteryType: String,
  prefBatteryType: String,
  vehicleModel: String,
  licensePlateNumber: String,
  currentLocation: String,
  additionalNote: String,
},
{timestamps: true}
);

const BatteryDetailsModel = mongoose.model("BatteryDetails", BatteryDetailsSchema);

module.exports = BatteryDetailsModel;
