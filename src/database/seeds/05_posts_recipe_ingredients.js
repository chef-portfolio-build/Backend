
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { post_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
        { post_id: 1, ingredient_id: 2, ingredient_quantity: 2 },
        { post_id: 1, ingredient_id: 3, ingredient_quantity: 1 },
        { post_id: 1, ingredient_id: 4, ingredient_quantity: 1 },
      ]);
    });
};
