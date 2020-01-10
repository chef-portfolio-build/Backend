
// https://source.unsplash.com/600x400/?food.salad
// https://source.unsplash.com/600x400/?food.dinner

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          food_name: 'Lobster and irish whiskey salad',
          description: 'Fresh lobster and irish whiskey served on a bed of lettuce',
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b8/51/fe/irish-whiskey-lobster.jpg',
          meal_type: 'Dinner',
          user_id: 10,
          created_at: '2019-12-29 01:32:21',
          instructions: 'In a small mixing bowl thoroughly combine softened butter, cayenne pepper, and paprika. In a large deep-sided skillet over medium-high heat, melt the cayenne butter and add the mushrooms, scallions and lobster meat. Saute until mushroom are golden, about 5 minutes, and season with salt and pepper, to taste. Carefully add the whiskey off the heat and cook until almost completely evaporated. Add the cream and reduce until thickened. Serve in large bowls over hot rice.'
        },
        {
          food_name: 'Butter bean and peanut salad',
          description: 'A crisp salad featuring butter bean and peanut',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--279493_12.jpg?itok=aTPIm-5c',
          meal_type: 'Salad',
          user_id: 9,
          created_at: '2019-12-29 01:32:21',
          instructions: 'In a large bowl, combine the beans, peppers, onion and garlic. In a small bowl, combine the remaining ingredients. Pour over bean mixture and toss to coat. Chill until serving. Nutrition Facts 3/4 cup: 147 calories, 7g fat (1g saturated fat), 0 cholesterol, 360mg sodium, 19g carbohydrate (3g sugars, 5g fiber), 5g protein. Diabetic Exchanges: 1 starch, 1 vegetable, 1 fat'
        },
        {
          food_name: 'Pecan and date biscuits',
          description: 'Crunchy biscuits made with pecan and crunchy date',
          image: 'https://img.taste.com.au/wicKYfuG/w643-h428-cfill-q90/taste/2016/11/date-pecan-and-ginger-cookies-21578-1.jpeg',
          meal_type: 'Dessert',
          user_id: 2,
          created_at: '2019-12-29 01:32:21',
          instructions: 'These cookies turned out to be extremely good. The spices offer a wonderful combination of flavors. The pecans offer crunch, while the dates add chewiness. Quinn has proclaimed these his favorite cookie. I’m a little partial to them myself. In fact, we liked them so much that we kept most of them for ourselves.'
        },
        {
          food_name: 'Venison and bean casserole',
          description: 'Venison and bean stewed',
          image: 'https://data.thefeedfeed.com/recommended/post_4053077.jpeg',
          meal_type: 'Dinner',
          user_id: 2,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
        {
          food_name: 'Banana and date cake',
          description: 'Rich cake made with fresh banana and moist date',
          image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--560883_12.jpg',
          meal_type: 'Dessert',
          user_id: 3,
          created_at: '2019-12-29 01:32:21',
          instructions: 'In a large skillet, cook venison and onion over medium heat until meat is no longer pink; drain. Stir in remaining ingredients. Transfer to a 2-qt. baking dish. Cover and bake at 350° for 35-40 minutes or until heated through..'
        },
        {
          food_name: 'Sultana and gruyere salad',
          description: 'Sultana and gruyere served on a bed of lettuce',
          image: 'https://images.unsplash.com/photo-1543340713-0f7f0abf9e49?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600',
          meal_type: 'Salad',
          user_id: 4,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
        {
          food_name: 'Pigeon and stilton wontons',
          description: 'Thin wonton cases stuffed with pigeon and stilton',
          image: 'https://images.unsplash.com/photo-1558030054-9e08299a4d4b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=600',
          meal_type: 'Dinner',
          user_id: 2,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
        {
          food_name: 'Lemon and almond cupcakes',
          description: 'Venison and bean stewed',
          image: 'https://data.thefeedfeed.com/recommended/post_4053077.jpeg',
          meal_type: 'dessert',
          user_id: 1,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
        {
          food_name: 'Apple and blackberry pie',
          description: 'A shortcrust pasty case filled with bramley apple and fresh blackberry',
          image: 'hhttps://images-gmi-pmc.edge-generalmills.com/29830815-477f-4970-a163-dd411fc9631b.jpg',
          meal_type: 'dessert',
          user_id: 8,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
        {
          food_name: 'Buffalo and aubergine kebab',
          description: 'Skewer-cooked buffalo and fried aubergine served in warm pitta pockets',
          image: 'https://www.sainsburysmagazine.co.uk/uploads/media/675x882/09/4579-aubergine-kebabs-1120.jpg?v=1-0',
          meal_type: 'Dinner',
          user_id: 1,
          created_at: '2019-12-29 01:32:21',
          instructions: 'Consequuntur eum eos repudiandae sed. Quaerat libero assumenda. Aspernatur distinctio suscipit voluptas rerum deleniti ratione et. Ut quae quia incidunt quos qui impedit facere. Praesentium voluptatum aut magnam rerum velit sit sunt. Cumque ratione repellendus quia quia voluptate nulla a.'
        },
      ]);
    });
};
