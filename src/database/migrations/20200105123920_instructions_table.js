
exports.up = function(knex) {
  return knex.schema
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step_number').notNullable();
      tbl.string('instruction', 255).notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions');
};
