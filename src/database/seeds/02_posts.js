
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {
          food_name: 'Banana and coriander salad',
          description: "Fresh banana and dried coriander served on a bed of lettuce",
          image: "http://lorempixel.com/640/480/food",
          is_liked: false,
          created_at: '',
          user_id: 1
        },
        {
          food_name: 'Rocket and tomato pasta',
          description: "Fresh egg pasta in a sauce made from fresh rocket and plum tomatoes",
          image: "http://lorempixel.com/640/480/food",
          is_liked: false,
          created_at: '',
          user_id: 3
        },
        {
          
          food_name: 'Parmesan and falafel ciabatta',
          description: "Warm ciabatta filled with parmesan and falafel",
          image: "http://lorempixel.com/640/480/food",
          is_liked: false,
          created_at: '',
          user_id: 2
        }
      ]);
    });
};


