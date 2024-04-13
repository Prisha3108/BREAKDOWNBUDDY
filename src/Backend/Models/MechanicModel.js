// MechanicModel.js

const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  password: String,
  mobileNo: Number,
  type: String
});

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

module.exports = Mechanic;
