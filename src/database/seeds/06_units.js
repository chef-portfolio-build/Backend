
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('unit_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('unit_table').insert([
        {name: 'gr'},
        {name: 'tablespoon'},
        {name: 'teaspoon'},
        {name: 'ml'},
        {name: 'kg'}
      ]);
    });
};
