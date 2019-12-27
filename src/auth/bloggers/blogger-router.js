const router = require('express').Router();
const Post = require('./blogger-model');
const restricted = require('../middleware/auth-middleware');

// pass authorization to headers
router.get('/posts', restricted, (req, res) => {
  // insert an id
  Post.getLatestPosts()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...wtf?' });
    });
});

// get by id
router.get('/posts/:id', (req, res) => {
  const { id } =req.params;
  Post.findById(id)
    .then(p => {res.status(200).json({message: 'Success...', p})})
});


module.exports = router;