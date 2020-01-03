
exports.up = function(knex) {
  return knex.schema
    .createTable('unit_table', tbl => {
      tbl.increments()
      tbl.string('name', 50)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('unit_table');
};
