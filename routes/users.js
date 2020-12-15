const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const {sign} = require('jsonwebtoken');

router.post('/register', async (req, res, next) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const response = await user.save();
    generateJwtTokenAndUserIdPair(user, function (err, result) {
      return res.status(200).json(result);
    });
  }catch (e) {
    res.status(500).json(e);
  }
});

router.post('/login', async (req, res, next) => {
  const user = await Users.findOne(req.body);

  if(user){
    generateJwtTokenAndUserIdPair(user, function (err, result) {
      return res.status(200).json(result);
    });
  }else {
    res.status(404).json(`User doesn't exist`)
  }
});

router.get('/', async (req, res, next) => {
  const users = await Users.find();
  res.status(200).json(users);
});

router.get('/:id', async (req, res, next) => {
  const user = await Users.findOne(req.body);
  res.status(200).json(user)
});

function generateJwtTokenAndUserIdPair(user, next) {
  const options = {
    expiresIn: 2592000000
  };
  const result = {
    token: sign({_id: user._id}, 'secret', options),
    userId: user._id,
  };
  return next(null, result);
}

module.exports = router;
