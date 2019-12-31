const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  getUserWithRecipeAndBio,
  showUserInfoWithFood
}

function find() {
  return db('posts');
}

function findById(id) {
  return db('posts')
    .select('id', 'food_name', 'description', 'image', 'created_at', 'user_id')
    .where({ id })
    .first();
}

// display recipe with user bio
function getUserWithRecipeAndBio(post_id) {
  return db('posts')
    .select('posts.*', 'users.username', 'users.email')
    .from('posts')
    .join('users', 'users.id', 'posts.user_id')
    .where('posts.id', post_id)
}

// shows user info with food id
function showUserInfoWithFood(users_id) {
  return db('posts')
    .select('posts.*','users.username', 'users.email')
    .from('posts')
    .join('users', 'users.id', 'posts.user_id')
    .where('users.id', users_id)
}

// filter recipe by recipe title, meal type,  chef, and ingredients.
function filterBy(filter) {
  return db('posts')
    .select('posts.*', 'users.username')
}