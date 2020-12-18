const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const Post = require('../models/Post');


router.get('/:id', async (req, res, next) => {
  const user = await Users.findOne({_id: req.params.id});
  res.status(200).json(user)
});

router.get('/:id/posts', async (req, res, next) => {
  const posts = await Post.find({authorId: req.params.id});
  res.status(200).json(posts)
});


module.exports = router;
