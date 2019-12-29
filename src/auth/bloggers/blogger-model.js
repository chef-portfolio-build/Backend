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
// experimenting
// select * from posts where user_id = 1
function getLatestPosts(id) {
  return db('posts')
    .where('user_id', id)
}

function insertPost(post, user_id) {
  return db('posts')
    .insert({ ...post, user_id })
    .then(id => {
      return db('posts').where({ id: id[0] });
    })
}

function updatePost(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes);
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