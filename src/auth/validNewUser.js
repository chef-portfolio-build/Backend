const Users = require('./auth-model');
const { check, validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
  const errors= [];

  function validateNewUser(user) {
    !user.username && errors.push({ username: 'required' });
    !user.password && errors.push({ password: 'required' });
    !user.email && errors.push({ email: 'required' });


  }

  validateNewUser(req.body);

  // Does user exist?
  if (!errors.length) {
    await Users.findByName(req.body.username)
      .then(user => user && errors.push({ username: 'Username Already Exists!' }));
    await Users.findByEmail(req.body.email)
      .then(email => email && errors.push({ email: 'Email Already Exist!' }));
  }

  // OK we are probably safe to move on send conflict error
  errors.length < 1 ? next() : res.status(409).json({ errors: errors });
}