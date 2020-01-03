
exports.up = function(knex) {
  return knex.schema.table('recipe_ingredients', tbl => {
    tbl.integer('unit_id')
    .unsigned()
    .notNullable().defaultTo(1)
    .references('id')
    .inTable('unit_table')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  })
};

exports.down = function(knex) {
  return knex.schema.table('recipe_ingredients', tbl => {
    table.dropColumn('unit_id')
  })
};
