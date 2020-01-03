
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, instructions: 'Cut the lobster in two down the centre. ', post_id: 1},
        {step_number: 2, instructions: 'Remove all the meat, including the claws, retain the shell for serving.', post_id: 1},
        {step_number: 3, instructions: 'Heat the butter until foaming and quickly sauté the lobster chunks in it, until just cooked but not colored.', post_id: 1},
        {step_number: 4, instructions: 'Warm the whiskey slightly, pour over the lobster and CAREFULLY set fire to it.', post_id: 1},
        {step_number: 5, instructions: 'Once the flames have died down, add the cream, lemon juice, mustard and mix with the pan juices, and taste for seasoning, add salt and black pepper to taste.', post_id: 1},
        {step_number: 6, instructions: 'Put back into the half shells and place under a hot grill for 2-3 minutes until the sauce is bubbling.', post_id: 1},
        {step_number: 7, instructions: 'Serve hot with fresh lemon wedges, steamed baby potatoes and a fresh mixed salad.', post_id: 1},
      ]);
    });
};
