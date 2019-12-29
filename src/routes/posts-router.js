const router = require('express').Router();
const Posts = require('./posts-model');

// GET display all of the recipes
router.get('/', (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json({posts: posts})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'Cannot get posts...'});
    });
});

// GET display all recipes by user id
router.get('/user/:id', (req, res) => {
  Posts.getUserWithRecipe(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json({recipes: recipe})
      } else {
        res.status(400).json({ message: 'Cannot find post in database...'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Failed to get post...'})
    })
});

// GET display single recipe by recipe id
router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json({recipes: recipe})
      } else {
        res.status(400).json({ message: 'Cannot find post in database...'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Failed to get post...'})
    })
});


module.exports = router;