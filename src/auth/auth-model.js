const db = require('../database/dbConfig');

module.exports = {
  findAll,
  findPosts,
  addUser,
  findById,
  findByEmail,
  findByName
};

function findAll() {
  return db('users');
}


function findPosts() {
  return db('posts')
}

function addUser(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

// for validation
function findByName(username) {
  return db('users')
    .select('username')
    .where({ username })
    .first();
}

// for validation
function findByEmail(email) {
  return db('users')
    .select('email')
    .where({ email })
    .first();
}



function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}