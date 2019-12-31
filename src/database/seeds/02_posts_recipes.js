
// https://source.unsplash.com/600x400/?food.salad
// https://source.unsplash.com/600x400/?food.dinner

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          food_name: 'Lobster and irish whiskey salad',
          description: 'Fresh lobster and irish whiskey served on a bed of lettuce',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/51/fe/irish-whiskey-lobster.jpg',
          meal_type: 'Dinner',
          user_id: 11,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Butter bean and peanut salad',
          description: 'A crisp salad featuring butter bean and peanut',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--279493_12.jpg?itok=aTPIm-5c',
          meal_type: 'Salad',
          user_id: 10,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Pecan and date biscuits',
          description: 'Crunchy biscuits made with pecan and crunchy date',
          image: 'https://img.taste.com.au/wicKYfuG/w643-h428-cfill-q90/taste/2016/11/date-pecan-and-ginger-cookies-21578-1.jpeg',
          meal_type: 'Dessert',
          user_id: 20,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Venison and bean casserole',
          description: 'Venison and bean stewed',
          image: 'https://data.thefeedfeed.com/recommended/post_4053077.jpeg',
          meal_type: 'Dinner',
          user_id: 8,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Banana and date cake',
          description: 'Rich cake made with fresh banana and moist date',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--560883_12.jpg',
          meal_type: 'Dessert',
          user_id: 3,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Sultana and gruyere salad',
          description: 'Sultana and gruyere served on a bed of lettuce',
          image: 'https://images.unsplash.com/photo-1543340713-0f7f0abf9e49?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600',
          meal_type: 'Salad',
          user_id: 2,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Pigeon and stilton wontons',
          description: 'Thin wonton cases stuffed with pigeon and stilton',
          image: 'https://images.unsplash.com/photo-1558030054-9e08299a4d4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600',
          meal_type: 'Dinner',
          user_id: 2,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Lemon and almond cupcakes',
          description: 'Venison and bean stewed',
          image: 'https://data.thefeedfeed.com/recommended/post_4053077.jpeg',
          meal_type: 'dessert',
          user_id: 1,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Apple and blackberry pie',
          description: 'A shortcrust pasty case filled with bramley apple and fresh blackberry',
          image: 'hhttps://images-gmi-pmc.edge-generalmills.com/29830815-477f-4970-a163-dd411fc9631b.jpg',
          meal_type: 'dessert',
          user_id: 1,
          created_at: '2019-12-29 01:32:21',
        },
        {
          food_name: 'Buffalo and aubergine kebab',
          description: 'Skewer-cooked buffalo and fried aubergine served in warm pitta pockets',
          image: 'https://www.sainsburysmagazine.co.uk/uploads/media/675x882/09/4579-aubergine-kebabs-1120.jpg?v=1-0',
          meal_type: 'Dinner',
          user_id: 1,
          created_at: '2019-12-29 01:32:21',
        },
      ]);
    });
};
