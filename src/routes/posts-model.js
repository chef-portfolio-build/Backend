const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  getUserWithRecipe,
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

function getUserWithRecipe(user_id) {
  return db('posts')
    .join('users', 'users.id', 'posts.user_id')
    .select('users.id', 'food_name', 'description', 'image', 'created_at', 'posts.id')
    .where({ user_id: user_id })
    .orderBy('posts.id')
}

// shows user info with food id
function showUserInfoWithFood(users_id) {
  return db('posts')
    .select('posts.*','users.username', 'users.email')
    .from('posts')
    .join('users', 'users.id', 'posts.user_id')
    .where('users.id', users_id)
}