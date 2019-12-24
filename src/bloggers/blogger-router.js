const router = require('express').Router();
const Post = require('./blogger-model');
const restricted = require('../auth/auth-middleware.js');

router.get('/posts', restricted, (req, res) => {
  Post.getUserBlogs()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...' });
    });
});


module.exports = router;