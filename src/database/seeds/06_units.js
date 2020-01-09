
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('unit').del()
    .then(function () {
      // Inserts seed entries
      return knex('unit').insert([
        {name: 'gr'},
        {name: 'tablespoon'},
        {name: 'teaspoon'},
        {name: 'ml'},
        {name: 'kg'},
        {name: 'bucket'},
        {name: 'balti'}
      ]);
    });
};
