/**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/private/postsbyuserid Show chefs recipes only
    * @apiVersion 0.1.0
    * @apiName Get
    * @apiGroup Blogs auth
    * @apiPermission authenticate user passing token to header
    *
    * @apiParam (Request header) {String} Authorization token
    *
    * @apiSuccess
    * Array array of objects
    * 
    * @apiSuccessExample {json} Success example array
    * HTTP/1.1 200 OK
    *[
    * {
    *   "id": 17,
    *   "food_name": "Horseradish and goose salad",
    *   "description": "A crisp salad featuring fresh horseradish and goose",
    *   "image": "http://lorempixel.com/640/480/food",
    *   "is_liked": 0,
    *   "created_at": "2019-12-29 02:14:26",
    *   "user_id": 7
    * },
    * {
    *   "id": 18,
    *   "food_name": "Kidney and blackberry pie",
    *   "description": "A puff pasty case filled with kidney and fresh blackberry",
    *   "image": "http://lorempixel.com/640/480/food",
    *   "is_liked": 0,
    *   "created_at": "2019-12-29 02:16:27",
    *   "user_id": 7
    * }
    *]
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/private/poatsbyuserid
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 404 Not Found
    * 
    * {
    *   "message": "Hello Master Chef, you have no posts yet, please start posting about your delicious recipes"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 401 Unauthorized
    * 
    * {
    *   "message": "Invalid Token, you will need to Log back in"
    * }
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

    // *******************************************
    // ************************************************

    // POST add new recipes
/**
    * @api {post} https://chef-portfolio1-bw.herokuapp.com/api/private/posts Add new recipe
    * @apiVersion 0.1.0
    * @apiName Post
    * @apiGroup Blogs auth
    * @apiPermission authenticate a blog auth user login
    *
    * @apiParam (Request header) {String} Authorization token
    * 
    * @apiParam (Request body) {String} food_name Recipe name
    * @apiParam (Request body) {String} description Recipe description
    * @apiParam (Request body) {String} image Link to image
    * @apiExample {json} Example usage, required: 
    * 
    * {
    *   "food_name": "Horseradish and goose salad",
	  *   "description": "A crisp salad featuring fresh horseradish and goose",
	  *   "image": "http://lorempixel.com/640/480/food"
    * }
    * @apiSuccess
    * message "Food idea added"
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *   "message": "Food idea added",
    *   "recipe": [
    *   {
    *     "id": 18,
    *     "food_name": "Kidney and blackberry pie",
    *     "description": "A puff pasty case filled with kidney and fresh blackberry",
    *     "image": "http://lorempixel.com/640/480/food",
    *     "is_liked": 0,
    *     "created_at": "2019-12-29 02:16:27",
    *     "user_id": 7
    *     }
    *   ]
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/private/posts
    * 
    * @apiErrorExample {json} Unauthorized error
    * HTTP/1.1 401 Unauthorized
    * {
    *   "message": "Invalid Token, you will need to Log back in"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

    // **************************************************
    // *************************************************

    // Edit chefs recipes 
    /**
    * @api {put} https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id Edit a recipe
    * @apiVersion 0.1.0
    * @apiName Put
    * @apiGroup Blogs auth
    * @apiPermission authenticate user first to get token
    *
    * @apiParam (Request header) {String} Authorization token
    * 
    * @apiParam (Request body) {String} food_name Recipe name
    * @apiParam (Request body) {String} description Recipe description
    * @apiParam (Request body) {String} image Link to image
    * @apiExample {json} Example usage, required: 
    * 
    * {
    *   "food_name": "Horseradish and goose salad",
	  *   "description": "A crisp salad featuring fresh horseradish and goose",
	  *   "image": "http://lorempixel.com/640/480/food"
    * }
    * @apiSuccess
    * message "Recipe updated"
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *   "message": "food_name,description,image updated successfully. ",
    *   "changes": {
    *   "food_name": "Mash patatos",
    *   "description": "Boiled patatos with creamy cheese",
    *   "image": "http://lorempixel.com/640/480/food"
    * }
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id
    * 
    * @apiErrorExample {json} List Error
    * HTTP/1.1 404 Not Found
    * {
    *   "message": "Hello chef username, you have no posts yet, please start posting about your delicious recipes"
    * }
    * 
    * @apiErrorExample {json} Unauthorized error
    * HTTP/1.1 401 Unauthorized
    * {
    *   "message": "Invalid Token, you will need to Log back in"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

    // *****************************************************
    // **********************************************************
    //Remove a recipe
        /**
    * @api {delete} https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id Delete a recipe
    * @apiVersion 0.1.0
    * @apiName Delete
    * @apiGroup Blogs auth
    * @apiPermission first authenticate user to get token
    *
    * @apiParam (Request header) {String} Authorization token
    * 
    * @apiSuccess
    * message "Recipe deleted successfully"
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *  message: 'Recipe deleted successfully.'
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id
    * 
    * @apiErrorExample {json} List Error
    * HTTP/1.1 404 Not Found
    *{
    *   "message": "No recipe with that id: 14"
    *}
    * 
    * @apiErrorExample {json} Unauthorized error
    * HTTP/1.1 401 Unauthorized
    * {
    *   "message": "Invalid Token, you will need to Log back in"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/