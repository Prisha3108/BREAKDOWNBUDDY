// TowDetailsModel.jsx
const mongoose = require("mongoose");

// Define Schema for TowDetails collection
const TowDetailsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  vehicleModel: String,
  licensePlateNumber: String,
  towReason: String,
  currentLocation: String,
  destination: String,
  add_note: String,
  status: String
},
{timestamps: true}
);

const TowDetailsModel = mongoose.model("TowDetails", TowDetailsSchema);

module.exports = TowDetailsModel;
