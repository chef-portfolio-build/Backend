

exports.up = function(knex) {
  return knex.schema
    .createTable('chef', tbl =>{
      // tbl.clearCounters()
      tbl.increments();
      tbl.string('password', 128)
        .notNullable();
      tbl.string('username', 128)
        .unique()
        .notNullable();
      tbl.string('email', 128)
        .unique()
      tbl.string('phone', 50)
      tbl.string('first_name', 128)
      tbl.string('last_name', 128)
      tbl.string('cuisine_style', 128)
      tbl.string('address', 128)
      // rerun migreation
      tbl.string('city', 50);
      tbl.string('state', 50);
      tbl.string('country', 50);

      tbl.string('zip', 10)
      tbl.string('website', 256)
      tbl.string('bio', 1024)
      tbl.string('image', 128)
      tbl.string('linkedin', 128)
      tbl.string('twitter', 128)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('chef');
};
