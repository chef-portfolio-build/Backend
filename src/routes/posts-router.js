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
router.get('/:id/chef', (req, res) => {
  const { id } = req.params;
  
  Posts.showUserInfoWithFood(id)
    .then(recipe => {
      if (recipe.length) {
        res.status(200).json({recipes: recipe})
      } else {
        res.status(400).json({ message: `Chef id: ${id}, has no posts`})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Failed to get post...'})
    })
});


// GET display single recipe by recipe id and chef bio
router.get('/:id', (req, res) => {
  const id = req.params.id;
  
  Posts.getUserWithRecipeAndBio(id)
    .then(bio => {
      if (bio.length) {
        res.status(200).json({recipe: bio})
      } else {
        res.status(400).json({ message: 'Cannot find post in database...'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Failed to get post...'})
    })
});

// GET display recipe ingredients name by their id and recipe name
router.get('/:id/ingredients', (req, res) => {
  const id = req.params.id;

  Posts.listOfIngredients(id)
    .then(ingredient => {
      // console.log(ingredient)
      if (ingredient.length) {
        res.status(200).json({ingredients: ingredient})
      } else {
        res.status(400).json({ message: 'Cannot find ingredients for that recipe in the database'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Failed to get post...'})
    })
});

// get step by step instructions for recipe 🆔
router.get('/:id/instructions', (req, res) => {
  const id = req.params.id;

  Posts.findById(id)
    .then(ids => {
      if (ids) {
        Posts.getInstructions(id)
          .then(instruction => {
            // console.log(instruction)
            if (instruction.length) {
              res.status(200).json({ instructions: instruction})
            } else {
              res.status(404).json({ message: `No instructions for that recipe id:${id}`})
            }
        })
      } else {
        res.status(404).json({ message: `No recipe with id:${id}`})
      }
    })
    .catch(err => {console.log(err); res.status(500).json({error: `internal server error ${err}`})})
});


module.exports = router;