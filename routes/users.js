const {decodeToken, generateJwtTokenAndUserIdPair} = require('../utils/helpers');

const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.post('/register', async (req, res, next) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    following: [],
    followers: []
  });

  try {
    const response = await user.save();
    generateJwtTokenAndUserIdPair(user, function (err, result) {
      return res.status(200).json({response, result});
    });
  }catch (e) {
    res.status(500).json(e);
  }
});

router.post('/login', async (req, res, next) => {
  const user = await Users.findOne(req.body);

  if(user){
    generateJwtTokenAndUserIdPair(user, function (err, result) {
      return res.status(200).json({user, result});
    });
  }else {
    res.status(404).json(`User doesn't exist`)
  }
});

router.get('/', async (req, res, next) => {
  const users = await Users.find({ _id: {$ne: decodeToken(req.headers)}});
  res.status(200).json(users);
});


router.get('/:id', async (req, res, next) => {
  const user = await Users.findOne({_id: req.params.id});
  res.status(200).json(user)
});

router.post('/follow/:id', async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.params.id,{
    followers: [decodeToken(req.headers)]
  });
  const follower = await Users.findByIdAndUpdate(decodeToken(req.headers),{
    following: [req.params.id]
  });
  res.status(200).json('success')
});

router.post('/unfollow/:id', async (req, res, next) => {
  const user = await Users.findByIdAndUpdate(req.params.id,{
    followers: []
  });
  const follower = await Users.findByIdAndUpdate(decodeToken(req.headers),{
    following: []
  });
  res.status(200).json('success')
});



module.exports = router;
