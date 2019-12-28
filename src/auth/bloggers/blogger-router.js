const router = require('express').Router();
const Post = require('./blogger-model');
// const restricted = require('../middleware/auth-middleware');
const jwt = require('../../auth/middleware/jwtAccess');

// pass authorization to headers
router.get('/postsbyuserid/', jwt.checkToken(), (req, res) => {
  console.log('This is token: ', req.user.subject)
  const id = req.user.subject;
  Post.getLatestPosts(id)
    .then(post => {
      console.log(post)
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...wtf?' });
    });
});

// get by id single post
router.get('/posts/:id', (req, res) => {
  const { id } =req.params;
  Post.findById(id)
    .then(p => {res.status(200).json({message: 'Success...', p})})
});


module.exports = router;