// UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  fullName: String,
  password: String,
  mobileNo: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
