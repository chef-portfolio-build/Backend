const router = require('express').Router();
require('dotenv').config();
const HashFactor = parseInt(process.env.HASH) || 8;
// const secret = require('../config/secrets.js');
const validateNewUser = require('./validNewUser');
const validateLogin = require('./validLoginUser');

const bcrypt = require('bcryptjs');
const jwt = require('./jwtAccess');
const Users = require('./auth-model');



// POST register new chef
router.post('/register', validateNewUser, (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, HashFactor);
    user.password = hash;
  
    Users.addUser(user)
      .then(newUser => {
        console.log(newUser);
        const token = jwt.generateToken(newUser);
        res.status(201).json({ user: newUser, token});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

// login user
router.post('/login', validateLogin, (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(u => {
      if (u && bcrypt.compareSync(password, u.password)) {
        const token = jwt.generateToken(u);

        res.status(200).json({ message: `Welcome back ${u.username }`, user: u.username,token});
      } else {
        res.status(401).json({ message: `Wrong login credentials.`})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;


