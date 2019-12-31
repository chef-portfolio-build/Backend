/**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api List all blog posts
    * @apiVersion 0.1.0
    * @apiName Blogs
    * @apiGroup Blog Posts
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
    *
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     [{
    *        "id": 1,
    *        "food_name": "Banana and coriander salad",
    *        "description": "Fresh banana and dried coriander served on a bed of lettuce",
    *        "image": "http://lorempixel.com/640/480/food",
    *        "is_liked": 0,
    *        "created_at": "",
    *        "user_id": 1
    *    }]
    *
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
 */

 // ********************************************************
 // ***********************************************************

 /**
    * @api {get} https://chef-portfolio1-bw.herokuapp.com/api/:id List single blog post
    * @apiVersion 0.1.0
    * @apiName Blogs
    * @apiGroup Blog Posts
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
    *
    *
    * @apiSuccessExample {json} Success response:
    *     HTTPS 200 OK
    *     [{
    *        "id": 1,
    *        "food_name": "Banana and coriander salad",
    *        "description": "Fresh banana and dried coriander served on a bed of lettuce",
    *        "image": "http://lorempixel.com/640/480/food",
    *        "is_liked": 0,
    *        "created_at": "",
    *        "user_id": 1
    *    }]
    *
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
 */