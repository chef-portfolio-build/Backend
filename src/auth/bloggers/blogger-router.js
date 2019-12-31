const router = require('express').Router();
const Post = require('./blogger-model');
// const restricted = require('../middleware/auth-middleware');
const jwt = require('../../auth/middleware/jwtAccess');


// pass authorization to headers only matching chef can see recipes
router.get('/postsbyuserid/', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const userName = req.user.username;
  Post.getLatestPosts(userId)
    .then(post => {
      // check if chef has any recipes posted
      if (post.length) {
        res.status(200).json(post)
      } else {
        res.status(404).json({ message: `Hello chef ${userName}, you have no posts yet, please start posting about your delicious recipes` });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...wtf?' });
    });
});

// don't know if we should use this
// get by id single post
router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(p => {res.status(200).json({message: 'Success...', p})})
    .catch(err => {console.log(err); res.status(500).json({ error: err})});
});


// POST add more recipes
router.post('/posts', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const postData = req.body;

  Post.insertPost(postData, userId)
    .then(recipe => {
      console.log(recipe);
      res.status(200).json({ message: 'Food idea added', recipe});
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})});
});

// Edit chef posts
router.put('/posts/:id', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const userName = req.user.username;
  const { id } = req.params;
  const changes = req.body;
  console.log(id, userId)
  Post.findById(id)
    .then(ids => {
      console.log(ids.user_id)
      if (ids.user_id === userId) {
        Post.updatePost(id, changes)
        .then(recipe => {
          console.log(changes)
          res.status(200).json({ message: `${Object.keys(changes)} updated successfully. `, changes});
        })
        .catch(err => {console.log(err); res.status(500).json({error: 'You must enter some info'})})
      } else {
        res.status(404).json({ message: `Hello chef ${userName}, you have no posts yet, please start posting about your delicious recipes` });
      }
    })
      .catch(err => {console.log(err); res.status(500).json({error: err})})
});


// remove chef recipe by ID
router.delete('/posts/:id', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;

  Post.removePost()
});

module.exports = router;