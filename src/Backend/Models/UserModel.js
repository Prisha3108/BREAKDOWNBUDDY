// UserModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  password: String,
  mobileNo: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
