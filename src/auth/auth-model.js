const db = require('../database/dbConfig');

module.exports = {
  findAll,
  findPosts,
  addUser,
  findById,
  findByEmail,
  findByName,
  findBy,
  removeUser,
  editById
};

function findAll() {
  return db('chef');
}


function findPosts() {
  return db('recipe')
}

function findBy(filter) {
  return db('chef').where(filter);
}

function addUser(user) {
  return db('chef')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

// for validation
function findByName(username) {
  return db('chef')
    .select('username')
    .where({
      username
    })
    .first();
}

// for validation
function findByEmail(email) {
  return db('chef')
    .select('email')
    .where({
      email
    })
    .first();
}

function findById(id) {
  return db('chef')
    .select('id', 'username')
    .where({
      id
    })
    .first();
}

function removeUser(id) {
  return db('chef')
    .where({ id })
    .del();
}

// Edit user info
function editById(id, update) {
  return db('chef')
    .where({ id })
    .update(update, '*');
}