
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl =>{
      tbl.increments();
      tbl.string('password', 128)
        .notNullable();
      tbl.string('username', 128)
        .unique()
        .notNullable();
      tbl.string('email', 128)
        .unique();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
