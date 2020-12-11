var express = require('express');
var router = express.Router();
const Users = require('../models/User');

router.post('/register', async (req, res, next) => {
  const user = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const response = await user.save();
    res.status(200).json(response);
  }catch (e) {
    res.status(500).json(e);
  }
});

router.post('/login', async (req, res, next) => {
  const user = await Users.findOne(req.body);
  res.status(200).json(user)
});

module.exports = router;
