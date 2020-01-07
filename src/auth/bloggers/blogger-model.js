const db = require('../../database/dbConfig');

module.exports = {
  getUserPosts,
  insertPost,
  findChefById,
  updatePost,
  removePost,
  addInstructions,
  findInstructions,
  findInstructionWith,
  getLatestPosts,
  findById,
  findByName,
  updateInstructions,
  deleteInstruction
}
// - a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
// - when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
// - have a way to save step by step instructions for preparing a recipe.

function getUserPosts(user_id) {
  return db('recipe')
    // .join('chef', 'recipe.user_id', '=', user_id)
    .where('user_id', user_id)
    // .first() // returns the first found object
}

// find chef by 🆔
function findChefById(id) {
  return db('chef')
    .where('id', id)
    .first();
}

// show latest post by user id...
function getLatestPosts(id) {
  return db('recipe')
    .where('user_id', id)
    .orderBy('created_at', 'desc')
}

function insertPost(post, user_id) {
  return db('recipe')
    .insert({ ...post, user_id })
    .then(id => {
      return db('recipe').where({ id: id[0] });
    })
}
// insert ingredient to recipe
// INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
// VALUES (4, 15)

// show recipes with ingredients
// SELECT * from recipe as r
//     INNER JOIN recipe_ingredients as ri
//         ON r.id = ri.recipe_id
//     INNER JOIN ingredients as i
//         ON i.id = ri.ingredient_id

// -- add instructions
// INSERT INTO instructions (step_number, instruction, recipe_id)
// VALUES
//         (1, "Heat up the water", 4), 
//         (2, "Hunt the dear from the forest", 4),
//         (3, "Kill it", 4),
//         (4, "Cut in small peaces", 4);

function addInstructions(instruction, recipe_id) {
  return db('instructions')
    .select('step_number', 'instruction', 'recipe_id')
    .insert({ ...instruction, recipe_id })
    .then(id => {
      return db('instructions')
        .where({ id: id[0] });
    })
}

function findInstructions(id) {
  return db('instructions')
    .where({ id })
    .first()
}
function findInstructionWith(recipe_id) {
  return db('instructions')
    .where({ recipe_id })
    // .first();
}
// UPDATE instructions
// SET instruction = "Testing edit"
// WHERE recipe_id = (
//                           SELECT id 
//                           FROM recipe 
//                           WHERE id = 13
//                         )
//       AND step_number = 2

// update instructions:
function updateInstructions(id, changes) {
  return db('instructions')
    .where({id})
    .update(changes)

}
// knex('recipe').where('id', 13).select('id').first()
//     .then(recipe => {
//          return knex('recipe').where({recipe_id: recipe.id, step_number: 2}).update('instruction', 'Testing edit')     
//      })
// function updateInstruction(step_number, changes, recipe_id) {
//   return db('instructions')
//     .where('recipe_id', recipe_id)
//     .select('id').first()
//     .then(recipe => {
//       console.log('id::: ',recipe) 
//          return db('instructions')
//          .where({recipe_id: recipe.id, step_number: step_number})
//          .update('instruction', changes)     
//      })
// }

function deleteInstruction(id) {
  return db('instructions')
    .where('id', id)
    .del();
}
// INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
// VALUES (4, 15)
function insertRecipeIngredient(recipe_id, ingredient_id) {
  return db('recipe_ingredients')
    .insert({ ...recipe_id, ingredient_id})
}
// UPDATE recipe
// SET instructions = "Hello world, this is how you make cheese burger"
// WHERE id = 1;
// update posts
function updatePost(id, changes) {
  return db('recipe')
    .where({ id })
    .update(changes, '*');
}


function removePost(id) {
  return db('recipe')
    .where('id', id)
    .del();
}

function findById(id) {
  return db('recipe')
    .where({ id })
    .first();
}

// g

function findByName(name) {
  return db('recipe')
    .select('id')
    .where('food_name', '=', name)
}

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