
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'lettuce'},
        {name: 'flaxseed'},
        {name: 'bulgur wheat'},
        {name: 'flour'},
        {name: 'tablespoon butter'},
        {name: 'chopped fresh chives'},

        {name: 'tomato'},
        {name: 'onion'},
        {name: 'garlic'},
        {name: 'pasta'},
        {name: 'oregano'},
        {name: 'black pepper'},
        {name: 'mushroom'},

        {name: 'water'},
        {name: 'salt'},
        {name: 'olive oil'},
        {name: 'oil'},
        {name: 'oregano'},
        {name: 'lamb'},
        {name: 'white cabbage'},

        {name: 'sugar'},
        {name: 'egg'},
        {name: 'cocoa'},
        {name: 'celeriac'},
        {name: 'butter'},
        {name: 'almond'},
        {name: 'cheese'}
      ]);
    });
};
