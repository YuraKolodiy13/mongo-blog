const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    following: Array,
    followers: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Auth', UserSchema);