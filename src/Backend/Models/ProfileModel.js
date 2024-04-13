const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  mobileNo: String,
  gender: String,
  address: String,
  zipcode: String,
  city: String,
  state: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
