
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, instruction: 'Cut the lobster in two down the centre. ', recipe_id: 1},
        {step_number: 2, instruction: 'Remove all the meat, including the claws, retain the shell for serving.', recipe_id: 1},
        {step_number: 3, instruction: 'Heat the butter until foaming and quickly sauté the lobster chunks in it, until just cooked but not colored.', recipe_id: 1},
        {step_number: 4, instruction: 'Warm the whiskey slightly, pour over the lobster and CAREFULLY set fire to it.', recipe_id: 1},
        {step_number: 5, instruction: 'Once the flames have died down, add the cream, lemon juice, mustard and mix with the pan juices, and taste for seasoning, add salt and black pepper to taste.', recipe_id: 1},
        {step_number: 6, instruction: 'Put back into the half shells and place under a hot grill for 2-3 minutes until the sauce is bubbling.', recipe_id: 1},
        {step_number: 7, instruction: 'Serve hot with fresh lemon wedges, steamed baby potatoes and a fresh mixed salad.', recipe_id: 1},
      ]);
    });
};
