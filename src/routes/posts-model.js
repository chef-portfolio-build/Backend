const db = require('../database/dbConfig');

module.exports = {
  find,
  // findChef,
  findById,
  getUserWithRecipeAndBio,
  showUserInfoWithFood,
  recipeWithIngredients,
  listOfIngredients,
  getInstructions
}

function find() {
  return db('recipe');
}

// find chef by 🆔
// function findChef(chef_id) {
//   return db('chef')
//     .select('id')
//     .where({ chef_id })
//     .first();
// }
// find recipe by id
function findById(id) {
  return db('recipe')
    .select('id', 'food_name', 'description', 'image', 'created_at', 'user_id')
    .where({ id })
    .first();
}
// // show recipes with ingredients
// SELECT * from recipe as r
//     INNER JOIN recipe_ingredients as ri
//         ON r.id = ri.recipe_id
//     INNER JOIN ingredients as i
//         ON i.id = ri.ingredient_id
function recipeWithIngredients(recipe_id) {
  return db('recipe as r')
    .join('recipe_ingredients as ri', function() {
      this.on('r.id', '=', 'ri.recipe_id')
    })
    
    .join('ingredient as i', function() {
      this.on('i.id', '=', 'ri.ingredient_id')
    })
    
    .where('r.id', recipe_id)
}

// get list of ingredients by recipe ID:::
// '/:id/ingredients'
function listOfIngredients(recipe_id) {
  return db('ingredient as i')
    
    .join('recipe_ingredients as ri', function () {
      this.on('i.id', '=', 'ri.ingredient_id');
    })
    .join('recipe as r', function () {
      this.on('r.id', '=', 'ri.recipe_id');
    })
    .select('r.id', 'r.food_name', 'i.id', 'i.ingredient_name')
    .where('r.id', recipe_id)
}

// display recipe with user bio
function getUserWithRecipeAndBio(post_id) {
  return db('recipe')
    .select('recipe.*', 'chef.first_name', 'chef.last_name', 'chef.website', 'chef.email', 'chef.phone', 'chef.bio', 'chef.image', 'chef.cuisine_style', 'chef.linkedin', 'chef.twitter', 'chef.address', 'chef.zip', 'chef.state', 'chef.city', 'chef.country')
    .from('recipe')
    .join('chef', 'chef.id', 'recipe.user_id')
    .where('recipe.id', post_id)
}

// shows user info with food id
function showUserInfoWithFood(chef_id) {
  return db('recipe')
    // .select('recipe.*','chef.first_name', 'chef.last_name')
    .select('recipe.*')
    .from('recipe')
    .join('chef', 'chef.id', 'recipe.user_id')
    .where('chef.id', chef_id)
}

// -- get instructions
// SELECT r.id, r.food_name, i.step_number, i.instruction FROM recipe as r
// INNER JOIN instructions as i
// ON r.id = i.recipe_id
// WHERE r.id = 4
// ORDER BY r.id, i.step_number;
// get step by step instructions for recipe
function getInstructions(recipe_id) {
  return db('recipe as r')
    .join('instructions as i', function() {
      this.on('r.id', '=', 'i.recipe_id')
    })
    .select('r.id', 'r.food_name', 'i.step_number', 'i.instruction')
    .where('r.id', recipe_id)
    .orderBy('r.id', 'i.step_number')
}

// filter recipe by recipe title, meal type,  chef, and ingredients.
// function filterBy(filter) {
//   return db('recipe')
//     .select('recipe.*', 'chef.username')
// }

// function getRecipeById(post_id) {
//   return db('recipe')
//     .join('recipe_ingredients as ri', 'ri.recipe_id', 'recipe.id')
//     .select('recipe.*', 'chef.username')
//     .join('ingredients as i', 'i.id', )
// }