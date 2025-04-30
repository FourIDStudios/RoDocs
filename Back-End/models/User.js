const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
  },
  l_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  discord:{
    type: String,
    required: true,
  }
});

// Create model
const User = mongoose.model('User', userSchema);

module.exports = User;$tu