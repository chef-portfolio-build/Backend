const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  generateToken,
  // checkToken,
  // checkRole
}

// generate new JWT token
function generateToken(user) {
  const JWT_SECRET = process.env.JWT_SECRET 
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '1w',
  }

  return jwt.sign(payload, JWT_SECRET, options)
}

function checkToken() {
  
}