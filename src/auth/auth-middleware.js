const jwt = require('jsonwebtoken');
require('dotenv').config();
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Not verified'})
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};
