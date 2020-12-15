const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    author: String,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', PostSchema);