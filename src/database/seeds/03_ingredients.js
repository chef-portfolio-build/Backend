exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([{
          ingredient_name: 'lettuce',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'flaxseed',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'bulgur wheat',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'flour',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'tablespoon butter',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'chopped fresh chives',
          unit_id: 2,
          quantity: 1.5,
        },

        {
          ingredient_name: 'tomato',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'onion',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'garlic',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'pasta',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'oregano',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'black pepper',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'mushroom',
          unit_id: 2,
          quantity: 1.5,
        },

        {
          ingredient_name: 'water',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'salt',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'olive oil',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'oil',
          unit_id: 2,
          quantity: 1.5,
        },
        {
          ingredient_name: 'oregano',
          unit_id: 2,
          quantity: 1.5,
        },
      ]);
    });
};