
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('post_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.float('ingredient_quantity').notNullable();
      tbl.unique(['post_id', 'ingredient_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('recipe_ingredients');
};
