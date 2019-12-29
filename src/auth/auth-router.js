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
/**
    * @api {post} https://chef-portfolio1-bw.herokuapp.com/api/auth/register Register new user
    * @apiVersion 0.1.0
    * @apiName Create
    * @apiGroup Auth
    * @apiPermission authenticate a blog user register
    *
    * @apiParam (Request body) {String} username The user name, min 5
    * @apiParam (Request body) {String} password The user password, min 5
    * @apiParam (Request body) {String} email The user email
    * @apiExample {js} Example usage, required: 
    * Minimum of 5 characters!
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    *   "email": "thunder@kebap.com"
    * }
    *
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *   "user": {
    *   "id": 19,
    *   "username": "thunderkebap"
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/register
    * 
    * @apiErrorExample {json} List User exist
    * {
    * "errors": [
    *   {
    *     "username": "Username Already Exists!"
    *   },
    *   {
    *     "email": "Email Already Exist!"
    *   }
    * ]
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

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
/**
    * @api {post} https://chef-portfolio1-bw.herokuapp.com/api/auth/login Login User
    * @apiVersion 0.1.0
    * @apiName Post
    * @apiGroup Auth
    * @apiPermission authenticate a blog auth user login
    *
    * @apiParam (Request body) {String} username The user name, min 5
    * @apiParam (Request body) {String} password The user password, min 5
    * @apiExample {json} Example usage, required: 
    * Minimum of 5 characters!
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    * }
    * @apiSuccess
    * message Welcome back user
    * user username
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *    "message": "Welcome back jonathan",
    *    "user": "jonathan",
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/login
    * 
    * @apiErrorExample {json} List User exist
    * HTTP/1.1 401 Internal Server Error
    *{
    *   "message": "Wrong login credentials."
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/
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
/**
    * @api {put} https://chef-portfolio1-bw.herokuapp.com/api/auth/:id Change user info
    * @apiVersion 0.1.0
    * @apiName Write
    * @apiGroup Auth
    * @apiPermission authenticate a blog auth user login
    * 
    * @apiParam {Number} id Users unique ID.
    *
    * @apiParam (Request body) {String} username The user name
    * @apiParam (Request body) {String} password The user password
    * @apiParam (Request body) {String} email The user email
    * @apiSuccessExample {json} Example usage, pass any field that needs update: 
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    *   "email": "email@tobeupdated.com"
    * }
    * 
    * @apiParam (Request header) {String} Authorization Pass it to headers
    * @apiParam (Request header) {String} token Pass it to headers
    * 
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *    "message": "Welcome back jonathan",
    *    "user": "jonathan",
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/login
    * 
    * @apiErrorExample {json} List User exist
    * HTTP/1.1 401 Internal Server Error
    *{
    *   "message": "Wrong login credentials."
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/
// Edit user information PUT
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

// Only for admins to delete a user
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


