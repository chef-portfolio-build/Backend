const db = require('../database/dbConfig');

module.exports = {
  find,
  findById
}

function find() {
  return db('posts');
}

function findById(id) {
  return db('posts')
    .select('id', 'food_name', 'user_id')
    .where({ id })
    .first();
}

function getUserWithRecipe(post_id) {
  return db('users as u')
    .join('posts as p')
}