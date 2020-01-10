const router = require('express').Router();
require('dotenv').config();
const HashFactor = parseInt(process.env.HASH) || 8;
const validateNewUser = require('./validNewUser');
const validateLogin = require('./validLoginUser');
const { check, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('./middleware/jwtAccess');
const Users = require('./auth-model');

// POST register new chef
router.post('/register', [
  check('username').isLength({ min: 5 }),
  check('password').isLength({ min: 5 }),
  check('email').isEmail(),
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

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

// Edit user information PUT
router.put('/update', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const changes = req.body;

  Users.findById(userId)
    .then(u => {
      if (u.id === userId) {
        if (changes.password) {
          const hash = bcrypt.hashSync(changes.password, HashFactor);
          changes.password = hash;
        }
      Users.editById(userId, changes)
        .then(user => {
          res.status(200).json({ message: `${Object.keys(changes)} updated successfully` });
        })
        .catch(err => {
          console.log(err);
          res.status(404).json({ error: err});
        });
      } else {
        res.status(404).json({message: `The server can not find requested resource. User id: ${id}`})
      }
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})})
});

// Only for admins to delete a user
// Delete user, provide a login token in the header.
router.delete('/remove', jwt.checkToken(), (req, res, next) => {
  const id = req.user.subject;
console.log(id)
  Users.findById(id)
    .then(user => {
      if (user) {
        Users.removeUser(id)
          .then(user => {
            console.log(user)
            res.status(201).json({ message: `User with ${id} deleted..`})
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: `Error deleting user ${err} `})
      })
      } else {
        res.status(400).json({ message: `No user with 🆔 ${id} in database..`})
      }
    })
    .catch(err => { res.status(500).json({ error: err })});
});

module.exports = router;


