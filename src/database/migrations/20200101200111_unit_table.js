
exports.up = function(knex) {
  return knex.schema
    .createTable('unit', tbl => {
      tbl.increments()
      tbl.string('name', 50)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('unit');
};
