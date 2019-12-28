const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  generateToken,
  checkToken,
}

// generate new JWT token
function generateToken(user) {
  const JWT_SECRET = process.env.JWT_SECRET;
  
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '7d',
  }

  return jwt.sign(payload, JWT_SECRET, options)
}

function checkToken() {
  return (req, res, next) => {
    const token = req.headers.authorization;

    token && jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        res.status(401).json({ errors: [{ token: 'Invalid token, you will need to log back in'}]});
      } else {
        req.user = decoded;

        // console.log(decoded.username)
        // console.log(decoded.subject)
        next();
      }
    });
    //No Token, No Pass
    !token && res.status(401).json({ error: "No Token Provided, you will need to Login" });
  }
}