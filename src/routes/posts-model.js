const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  getUserWithRecipeAndBio,
  showUserInfoWithFood,
  recipeWithIngredients,
  listOfIngredients
}

function find() {
  return db('recipe');
}
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

// filter recipe by recipe title, meal type,  chef, and ingredients.
function filterBy(filter) {
  return db('recipe')
    .select('recipe.*', 'chef.username')
}

function getRecipeById(post_id) {
  return db('recipe')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'recipe.id')
    .select('recipe.*', 'chef.username')
    .join('ingredients as i', 'i.id', )
}

// function findBy(id) {
//   return db('chef')
//     .select('chef.id', 'chef.username')
//     .where('chef.id', id, 'chef.username')
//     .first()
// }