// ProfileModel.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true
  },
  fullName: String,
  email: String,
  mobileNo: Number,
  vehicleModel: String,
  licensePlateNumber: String,
  emergencyContact: Number,
  relation: String,
  emergencyName: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
