const db = require('../../database/dbConfig');

module.exports = {
  // getUserPosts,
  insertPost,
  updatePost,
  removePost,
  find,
  getLatestPosts,
  findById
}

// delete later experimenting
function find() {
  return db('posts');
}
// 
function getUserPosts(user_id) {
  return db('posts')
    .leftJoin('users', 'posts.user_id', '=', 'users.id')
    .where({ user_id });
}

// select * from posts where user_id = 1
function getLatestPosts(id) {
  return db('posts')
    .where('user_id', id)
}

// function insertPostWithInstructions(post, user_id) {
//   return db('posts')
//     .join('')
//     .insert({ ...post, user_id })
//     .then(id => {
//       return db('posts').where({ id: id[0] });
//     })
// }

function insertPost(post, user_id) {
  return db('posts')
    .insert({ ...post, user_id })
    .then(id => {
      return db('posts').where({ id: id[0] });
    })
}

function insertIngredient(post, post_id) {
  return db('recipe_ingredients')
    .insert({ ...post, post_id})
    
}

// update posts
function updatePost(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes, '*');
}


function removePost(id) {
  return db('posts')
    .where('id', id)
    .del();
}

function findById(id) {
  return db('posts')
    .where({ id })
    .first();
}