const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth"
    }],
    followers: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Auth', UserSchema);