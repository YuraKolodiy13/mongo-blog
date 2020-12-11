var express = require('express');
var router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts)
});

router.post('/', async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
  });

  try {
    const response = await post.save();
    res.status(200).json(response);
  }catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts)
});



module.exports = router;