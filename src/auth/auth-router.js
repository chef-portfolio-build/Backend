const router = require('express').Router();
require('dotenv').config();
const HashFactor = parseInt(process.env.HASH) || 8;
// const secret = require('../config/secrets.js');
const validateNewUser = require('./validNewUser');
const validateLogin = require('./validLoginUser');
const restricted = require('../auth/middleware/auth-middleware');

const bcrypt = require('bcryptjs');
const jwt = require('./middleware/jwtAccess');
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

// Edit user information POST
router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  
  if (changes.password) {
    console.log(changes.password)
    const hash = bcrypt.hashSync(changes.password, HashFactor);
    changes.password = hash;
  }
  Users.editById(id, changes)
    .then(user => {
      console.log(changes)
      res.status(200).json({ message: `${Object.keys(changes)} updated successfully` });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: err});
    });
});

// Only for admins
// Delete user, provide a login token in the header.
router.delete('/:id', restricted, (req, res, next) => {
  const { id } = req.params;

  Users.findById(id)
    .then(user => {
      if (user) {
        Users.removeUser(id)
          .then(user => {
            console.log(user)
            res.status(201).json({ message: `User deleted..`})
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: `Error deleting user ${err} `})
      })
      } else {
        res.status(400).json({ message: 'No user in database..'})
      }
    })
    .catch(err => { res.status(500).json({ error: err })});
});

module.exports = router;


