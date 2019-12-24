
exports.up = function(knex) {
  return knex.schema
    .createTable('posts', tbl => {
      tbl.increments();
      tbl.string('food_name');
      tbl.string('description');
      tbl.string('image');
      tbl.boolean('is_liked');
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
};
