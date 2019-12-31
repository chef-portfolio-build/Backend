
exports.up = function(knex) {
  return knex.schema
    // recipes
    .createTable('posts', tbl => {
      tbl.increments();
      tbl.string('food_name');
      tbl.string('description');
      tbl.string('image');
//breakfast, lunch, dinner, snack, dessert
      tbl.string('meal_type'); 
      tbl.boolean('is_liked').defaultTo(false);
      tbl.integer('liked').defaultTo(0);
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.timestamp('last_updated_at').defaultTo(knex.fn.now())
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable()
      tbl.string('quantity', 128)
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step_number').notNullable();
      tbl.string('instructions', 255).notNullable();
      tbl.integer('post_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('posts')
};
