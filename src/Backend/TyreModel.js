// TyreModel.js
const mongoose = require("mongoose");

// Define Schema for fuelDetails collection
const TyreDetailsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  numTyreReq: Number,
  vehicleModel: String,
  licensePlateNumber: String,
  currentLocation: String,
  additionalNote: String,
},
{timestamps: true}
);

const TyreDetailsModel = mongoose.model("TyreDetails", TyreDetailsSchema);

module.exports = TyreDetailsModel;
