const {sign} = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

const decodeToken = (header) => {
  let token = header['authorization'];
  token = token.replace(/^Bearer\s+/, "");
  const decoded = jwt.verify(token, 'secret');
  return decoded._id
};

const generateJwtTokenAndUserIdPair = (user, next) => {
  const options = {
    expiresIn: 2592000000
  };
  const result = {
    token: sign({_id: user._id}, 'secret', options),
    userId: user._id,
  };
  return next(null, result);
};

module.exports = {
  decodeToken,
  generateJwtTokenAndUserIdPair
};