const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  getUserWithRecipeAndBio,
  showUserInfoWithFood,
  // findBy
}

function find() {
  return db('posts');
}
// find posts by id
function findById(id) {
  return db('posts')
    .select('id', 'food_name', 'description', 'image', 'created_at', 'user_id')
    .where({ id })
    .first();
}

// display recipe with user bio
function getUserWithRecipeAndBio(post_id) {
  return db('posts')
    .select('posts.*', 'users.first_name', 'users.last_name', 'users.website', 'users.email', 'users.phone', 'users.bio', 'users.image', 'users.cuisine_style', 'users.linkedin', 'users.twitter', 'users.address', 'users.zip', 'users.state', 'users.city', 'users.country')
    .from('posts')
    .join('users', 'users.id', 'posts.user_id')
    .where('posts.id', post_id)
}

// shows user info with food id
function showUserInfoWithFood(users_id) {
  return db('posts')
    // .select('posts.*','users.first_name', 'users.last_name')
    .select('posts.*')
    .from('posts')
    .join('users', 'users.id', 'posts.user_id')
    .where('users.id', users_id)
}

// filter recipe by recipe title, meal type,  chef, and ingredients.
function filterBy(filter) {
  return db('posts')
    .select('posts.*', 'users.username')
}

function getRecipeById(post_id) {
  return db('posts')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'posts.id')
    .select('posts.*', 'users.username')
    .join('ingredients as i', 'i.id', )
}

// function findBy(id) {
//   return db('users')
//     .select('users.id', 'users.username')
//     .where('users.id', id, 'users.username')
//     .first()
// }