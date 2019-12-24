const db = require('../database/dbConfig');

module.exports = {
  getUserBlogs,
  postBlog,
  updateBlog,
  removeBlog
}

// 
function getUserBlogs(user_id) {
  return db('blogs')
    .innerJoin('users', 'posts.user_id', '=', 'users.id')
    .where({ user_id });
}

function postBlog(post) {
  return db('posts').insert(post);
}

function updateBlog(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes);
}

function removeBlog(id) {
  return db('posts')
    .where('id', id)
    .del();
}