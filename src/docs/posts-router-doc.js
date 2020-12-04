/**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api List all recipes
    * @apiVersion 0.1.0
    * @apiName Recipes
    * @apiGroup Recipe posts
    * @apiPermission no authentication required
    *
    * @apiExample {js} Example usage:
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess {Integer} id The post id
    * @apiSuccess {String} food_name Recipe name
    * @apiSuccess {String} description Short description of food idea
    * @apiSuccess {String} image Add image url
    * @apiSuccess {String} meal_type Type of recipe
    * @apiSuccess {Boolean} is_liked Like or not
    * @apiSuccess {Integer} liked counter
    * @apiSuccess {String} created_at Date of creation
    * @apiSuccess {String} last_updated_at Date of last update
    * @apiSuccess {Integer} user_id Chef's id
    * 
    * 
    *
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *{
    *  "recipes": [
    * {
    *   "id": 1,
    *   "food_name": "Banana and coriander salad",
    *   "description": "Fresh banana and dried coriander served on a bed of lettuce",
    *   "image": "http://lorempixel.com/640/480/food",
    *   "meal_type": "Dinner",
    *   "is_liked": 0,
    *   "liked": 0,
    *   "created_at": "2019-12-29 01:32:21",
    *   "last_updated_at": "2019-12-31 23:08:00",
    *   "user_id": 10
    * }]
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    * 
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/
    * 
    **/

 // ********************************************************
 // *******************************************************



/**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/:id List a recipe/blog by 🆔
    * @apiVersion 0.1.0
    * @apiName Recipe
    * @apiGroup Recipe posts
    * @apiPermission no authentication required
    *
    * @apiExample {js} Example usage:
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    *
    * @apiSuccess {Integer} id The post id
    * @apiSuccess {String} name Food name
    * @apiSuccess {String} description Short description of food idea
    * @apiSuccess {String} image Add image url
    * @apiSuccess {Boolean} is_like Like or not
    * @apiSuccess {String} created_at Date string
    * @apiSuccess {Integer} user_id Creators id 
    * @apiSuccess {String} first_name Chefs first
    * @apiSuccess {String} last_name Chefs last
    * @apiSuccess {String} website Chefs homepage
    * @apiSuccess {String} email Chefs email
    * @apiSuccess {String} phone Chefs phone #
    * @apiSuccess {String} bio Chefs biography 
    * @apiSuccess {String} cuisine_style Chefs style
    * @apiSuccess {String} linkedin Chefs linkedin
    * @apiSuccess {String} twitter Chefs twitter
    * @apiSuccess {String} address Chefs address
    * @apiSuccess {String} zip Chefs zip code
    * @apiSuccess {String} state Chefs state
    * @apiSuccess {String} city Chefs city
    * @apiSuccess {String} country Chefs country
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    * {
    * "recipes": [
    * {
    *   "id": 1,
    *   "food_name": "Lobster and irish whiskey salad",
    *   "description": "Fresh lobster and irish whiskey served on a bed of lettuce",
    *   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg",
    *   "meal_type": "Dinner",
    *   "is_liked": false,
    *   "liked": 0,
    *   "created_at": "2019-12-29 01:32:21",
    *   "last_updated_at": "2019-12-31 23:08:00",
    *   "user_id": 10,
    *   "first_name": "Telly",
    *   "last_name": "Metz",
    *   "website": "rafael.info",
    *   "email": "Friedrich_Purdy@hotmail.com",
    *   "phone": "481.565.7527 x59491",
    *   "bio": "Adipisci ullam voluptatum et ut molestiae facilis totam impedit quibusdam. Neque veritatis cumque quos animi officiis corporis accusantium. Aut quis ad facere inventore omnis vitae reprehenderit. Architecto quaerat minima atque voluptas porro. Ea excepturi nulla repudiandae dolorum.",
    *   "cuisine_style": "Caribbean cuisine",
    *   "linkedin": "https://cicero.name",
    *   "twitter": "Timmothy_Hansen",
    *   "address": "84959 Jennie Ways",
    *   "zip": "43886",
    *   "state": "MA",
    *   "city": "West Groverfort",
    *   "country": "Switzerland"
    *   }
    *   ]
    * }
    *
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    * 
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/:id
**/

// *******************************************
// ********************************************

// display recipes by chef id

/**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/:id/chef List a recipes by chef 🆔
    * @apiVersion 0.1.0
    * @apiName Recipes by chef
    * @apiGroup Recipe posts
    * @apiPermission no authentication required
    *
    * @apiExample {js} Example usage:
    * $http.get(url)
    *   .success((res, status) => doSomethingHere())
    *   .error((err, status) => doSomethingHere());
    * 
    * @apiSuccess {Array} recipes Array of recipes by user
    * @apiSuccess {Integer} id The post id
    * @apiSuccess {String} food_name Name of the recipe
    * @apiSuccess {String} image Picture of food
    * @apiSuccess {String} meal_type Type of meal: (dessert, dinner, etc)
    * @apiSuccess {Integer} liked Liked counter
    * @apiSuccess {String} created_at Creation date
    * @apiSuccess {String} last_updated_at Last updated
    * @apiSuccess {Integer} user_id Chefs 🆔
    * 
    * * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    * 
    * {
    *   "recipes": [
    *   {
    *     "id": 8,
    *     "food_name": "Lemon and almond cupcakes",
    *     "description": "Venison and bean stewed",
    *     "image": "https://data.thefeedfeed.com/recommended/post_4053077.jpeg",
    *     "meal_type": "dessert",
    *     "is_liked": 0,
    *     "liked": 0,
    *     "created_at": "2019-12-29 01:32:21",
    *     "last_updated_at": "2019-12-31 23:08:00",
    *     "user_id": 1
    *     },
    *   ]
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 400 Bad Request
    * 
    * {
    *   "message": "Chef id: 30, has no posts"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    * 
    *  @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/:id/chef
    * 
**/

// ****************************************************
// ***************************************************
// GET display recipe ingredients name by their id and recipe name
/**
 * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/:id/ingredients List of ingredients by recipe 🆔
 * 
 *  
 * @apiVersion 0.1.0
  * @apiName Ingredients
  * @apiGroup Recipe posts
  * @apiPermission no authentication required
  *
  * @apiExample {js} Example usage:
  * $http.get(url)
  *   .success((res, status) => doSomethingHere())
  *   .error((err, status) => doSomethingHere());
  * 
  * @apiSuccess {Array} recipes Array of ingredients
  * @apiSuccess {Integer} id ingredient 🆔
  * @apiSuccess {String} food_name Name of the recipe
  * @apiSuccess {String} ingredient_name Name of the ingredient

  * 
  * @apiSuccessExample {json} Success response:
  * HTTPS 200 OK
  * {
  *   "ingredients": [
  * {
  *     "id": 9,
  *     "food_name": "Lobster and irish whiskey salad",
  *     "ingredient_name": "garlic"
  * },
  * {
  *     "id": 12,
  *     "food_name": "Lobster and irish whiskey salad",
  *     "ingredient_name": "black pepper"
  * },
  * ]
  *}
  * @apiErrorExample {json} List error
  * HTTP/1.1 400 Bad Request
  * 
  * {
  *   "message": "Cannot find ingredients for that recipe in the database"
  * }
  * 
  * @apiErrorExample {json} List error
  * HTTP/1.1 500 Internal Server Error
  * 
  *  @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/:id/ingredients
  * 
 */

 // ***********************************
 // *************************************
// // get step by step instructions for recipe 🆔
 /**
  * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/:id/instructions List Step by step of instructions by recipe 🆔
  * 
  * @apiVersion 0.1.0
  * @apiName Instructions
  * @apiGroup Recipe posts
  * @apiPermission no authentication required
  *
  * @apiExample {js} Example usage:
  * $http.get(url)
  *   .success((res, status) => doSomethingHere())
  *   .error((err, status) => doSomethingHere());
  * 
  * @apiSuccess {Array} recipes Array of instructions
  * @apiSuccess {Integer} id instructions 🆔
  * @apiSuccess {String} food_name Name of the recipe
  * @apiSuccess {Integer} step_number instructions 🆔
  * @apiSuccess {String} instructions How to instruction
  * 
  * @apiSuccessExample {json} Success response:
  * HTTPS 200 OK
  * {
  *   "instructions": [
  *   {
  *     "id": 1,
  *     "food_name": "Lobster and irish whiskey salad",
  *     "step_number": 1,
  *     "instruction": "Cut the lobster in two down the centre. "
  *   },
  *   {
  *     "id": 1,
  *     "food_name": "Lobster and irish whiskey salad",
  *     "step_number": 2,
  *     "instruction": "Remove all the meat, including the claws, retain the shell for serving."
  *  },
  * ]
  * }
  * @apiErrorExample {json} List error
  * HTTP/1.1 404 Bad Request
  * {
  *   "message": "No instructions for that recipe id:100"
  * }
  *  
  * @apiErrorExample {json} List error
  * HTTP/1.1 500 Internal Server Error
  * 
  *  @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/:id/instructions
  * 
  */