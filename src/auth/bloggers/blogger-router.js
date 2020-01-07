// Authorized chef can do CRUD operations...
const router = require('express').Router();
const Recipe = require('./blogger-model');

const jwt = require('../../auth/middleware/jwtAccess');

// pass authorization to headers only matching chef can see recipes
router.get('/recipesbychefid/', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const userName = req.user.username;
  Recipe.getLatestPosts(userId)
    .then(post => {
      // check if chef has any recipes posted
      if (post.length) {
        res.status(200).json(post)
      } else {
        res.status(404).json({ message: `Hello chef ${userName}, you have no posts yet, please start adding your delicious recipes` });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...' });
    });
});


// POST/Auth add more recipes to blog, 
router.post('/recipe', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const postData = req.body;

  Recipe.insertPost(postData, userId)
    .then(recipe => {
      console.log(recipe);
      res.status(200).json({ message: 'Food idea added', recipe});
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})});
});

// Edit chefs recipe posts
router.put('/recipe/:id', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const userName = req.user.username;
  const { id } = req.params;
  const changes = req.body;
  
  Recipe.findById(id)
    .then(ids => {
      // check if recipe id exist first
      if (ids) {
        if (!Object.keys(changes).length) {
          res.status(404).json({message: 'Required to pass return body with json object'})
        }
        // if does, check if user id matches to token id and changes have value
        if (ids.user_id === userId ) {
          Recipe.updatePost(id, changes)
          .then(recipe => {
            res.status(200).json({ message: `${Object.keys(changes)} updated successfully. `, changes});
          })
          .catch(err => {console.log(err); res.status(404).json({error: 'No recipe'})})
        } else {
          res.status(409).json({ message: `Chef ${userName} not your recipe or you have no posts yet, please start posting about your delicious recipes`})
        }
      } else {
        res.status(404).json({message: `No recipe with given id: ${id} `})
      }
    })
      .catch(err => {console.log(err); res.status(500).json({error: err})})
});


// remove chef recipe by ID
router.delete('/recipe/:id', jwt.checkToken(), (req, res, next) => {
  const {subject, username} = req.user;
  const { id } = req.params;
  
  Recipe.findById(id)
    .then(ids => {
      if (!ids) {
        res.status(404).json({ message: `No recipe with that id: ${id}`})
      } else {
        if (ids.user_id === subject) {
          Recipe.removePost(id)
            .then(p => {
              res.status(202).json({ message: 'Recipe deleted successfully.'})
            })
            .catch(err => {console.log(err); res.status(204).json({error: err})})
        } else {
          res.status(404).json({ message: `Hello chef ${username}, that post does not exist.` });
        }
      }
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})})
});

// Add instructions to recipe/:id chef auth
router.post('/:id/instructions', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const { id } = req.params;
  const changes = req.body;
  // find the recipe first
  Recipe.findById(id)
    .then(ids => {
      if (!ids) {
        res.status(404).json({ message: `No recipe with that id: ${id}`})
      } else {
        if (ids.user_id === userId) {
          // add an instruction
          Recipe.addInstructions(changes, id)
            .then(ins => {
              res.status(201).json(ins);
            })
            .catch(err => {console.log(err); res.status(404).json({error: 'No recipe'})})
        }
      }
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})});
});

// edit instruction by 🆔
router.put('/:id/instructions', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const { id } = req.params; 
  const changes = req.body;

  Recipe.findChefById(userId)
    .then(ids => {
      const chef_id = ids.id;
      // console.log(chef_id)
      Recipe.getUserPosts(userId)
        .then(p => {
          
          if (!p) {
            res.status(404).json({message: 'No posts for you'})
          } else {
            p.forEach(e => {
              console.log(e.id)
              Recipe.findInstructionWith(e.id)
                .then(ids => {
                  console.log(ids)
                })
            })
            

            // let ids = [...p.id]
          }
        })
    })

  // first lets check if chef has a recipe with that instruction 🆔
  // if (ids.user_id === userId) {
  //   console.log(object)
  // }
// get instruction 🆔
  // Recipe.findInstructions(id)
  //   .then(ids => {
  //     // console.log(ids)
  //     if (!ids) {
  //       res.status(404).json({ message: `No instructions with that id: ${id}`})
  //     } else {
  //       Recipe.updateInstructions(id, changes)
  //         .then(c => {
  //           res.status(201).json({changes, id})
  //         })
  //         .catch(err => {console.log(err); res.status(500).json({error: err})})
  //     }
  //   })
  //   .catch(err => {console.log(err); res.status(500).json({error: err})})
});

// delete/remove instruction by recipe id
router.delete('/:id/instructions', jwt.checkToken(), (req, res) => {
  const userId = req.user.subject;
  const { id } = req.params;
console.log(id)
  // find the recipe first
  Recipe.findInstructions(id)
    .then(ids => {
      console.log(ids)
      if (!ids) {
        res.status(404).json({ message: `No instruction with that id: ${id}`})
      } else {
        // if (ids.user_id === userId) {
          Recipe.deleteInstruction(id)
            .then(d => {
              res.status(202).json({message: `Instruction id: ${id} deleted`})
            })
        // }
      }
    })
});

// remove instruction
// SELECT * from recipe as r
//     INNER JOIN recipe_ingredients as ri
//         ON r.id = ri.recipe_id
//     INNER JOIN ingredient as i
//         ON i.id = ri.ingredient_id
// // insert ingredient to recipe 
// find recipe by name
// he has access to recipe id
// he has access to the unit id
// he needs the quantity
// we need the name of the ingredient to get its id
// so we can add it to recipe ingredient table
// search db for the ingredient if its there get its id if not add and get its id
// use the recipe id and ingredient id to add the ingredient to recipe_ingredient table
router.get('/recipe/', jwt.checkToken(), (req,res) => {
  const name = req.body.search;
  console.log(name)
  Recipe.findByName(name)
    .then(names => {
      console.log(names)
    });

});
//
// -- get instructions
// SELECT r.id, r.food_name, i.step_number, i.instruction FROM recipe as r
// INNER JOIN instructions as i
// ON r.id = i.recipe_id
// ORDER BY r.id, i.step_number;

//
 // get recipe by ingredient
// SELECT r.food_name, i.ingredient_name FROM ingredient as i
// INNER JOIN recipe_ingredients as ri
// ON i.id = ri.ingredient_id
// INNER JOIN recipe as r
// ON r.id = ri.recipe_id
// WHERE r.food_name = "Lobster and irish whiskey salad"; WHERE r.id = 4;

// -- list of ingredients
// SELECT r.id, r.food_name, I.ID, i.ingredient_name FROM ingredient as i
// INNER JOIN recipe_ingredients as ri
// ON i.id = ri.ingredient_id
// INNER JOIN recipe as r
// ON r.id = ri.recipe_id
// WHERE r.id = 1;

// INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
// VALUES (1, 13)

//
// -- add instructions
// INSERT INTO instructions (step_number, instruction, recipe_id)
// VALUES
//         (1, "Heat up the water", 4), 
//         (2, "Hunt the dear from the forest", 4),
//         (3, "Kill it", 4),
//         (4, "Cut in small peaces", 4);

// -- add unit to ingredient
// INSERT INTO ingredient (ingredient_name, unit_id, quantity)
// VALUES 
//         ("lobster", 6, 1)


// - a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
// - when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
// - have a way to save step by step instructions for preparing a recipe.

module.exports = router;