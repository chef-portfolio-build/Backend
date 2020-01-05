const db = require('../../database/dbConfig');

module.exports = {
  // getUserPosts,
  insertPost,
  updatePost,
  removePost,
  find,
  getLatestPosts,
  findById,
  findByName
}

// delete later experimenting
function find() {
  return db('recipe');
}
// 
function getUserPosts(user_id) {
  return db('recipe')
    .leftJoin('users', 'recipe.user_id', '=', 'users.id')
    .where({ user_id });
}

// select * from posts where user_id = 1
function getLatestPosts(id) {
  return db('recipe')
    .where('user_id', id)
}
// insert ingredient to recipe
// INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
// VALUES (4, 15)

// show recipes with ingredients
// SELECT * from recipe as r
//     INNER JOIN recipe_ingredients as ri
//         ON r.id = ri.recipe_id
//     INNER JOIN ingredients as i
//         ON i.id = ri.ingredient_id

function insertRecipeWithInstructions(post, user_id) {
  return db('recipe')
    .join('')
    .insert({ ...post, user_id })
    .then(id => {
      return db('posts').where({ id: id[0] });
    })
}

function insertPost(post, user_id) {
  return db('recipe')
    .insert({ ...post, user_id })
    .then(id => {
      return db('recipe').where({ id: id[0] });
    })
}
// INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
// VALUES (4, 15)
function insertRecipeIngredient(recipe_id, ingredient_id) {
  return db('recipe_ingredients')
    .insert({ ...recipe_id, ingredient_id})
}
// UPDATE recipe
// SET instructions = "Hello world, this is how you make cheese burger"
// WHERE id = 1;
// update posts
function updatePost(id, changes) {
  return db('recipe')
    .where({ id })
    .update(changes, '*');
}


function removePost(id) {
  return db('recipe')
    .where('id', id)
    .del();
}

function findById(id) {
  return db('recipe')
    .where({ id })
    .first();
}

// g

function findByName(name) {
  return db('recipe')
    .select('id')
    .where('food_name', '=', name)
}