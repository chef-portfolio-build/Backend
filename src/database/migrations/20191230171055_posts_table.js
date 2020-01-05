
exports.up = function(knex) {
  return knex.schema
    // recipes
    .createTable('recipe', tbl => {
      // tbl.clearCounters();
      tbl.increments();
      tbl.string('food_name', 128);
      tbl.string('description', 500);
      tbl.string('image', 5000);
//breakfast, lunch, dinner, snack, dessert
      tbl.string('meal_type', 50); 
      // tbl.boolean('is_liked').defaultTo(false);
      tbl.integer('liked').defaultTo(0);
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.timestamp('last_updated_at').defaultTo(knex.fn.now());
      tbl.string('instructions', 1000);
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredient', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable()
      tbl.integer('unit_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('unit')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.float('quantity', 128)
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
};
