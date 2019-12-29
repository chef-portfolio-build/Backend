const router = require('express').Router();
const Post = require('./blogger-model');
// const restricted = require('../middleware/auth-middleware');
const jwt = require('../../auth/middleware/jwtAccess');

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
    * HTTP/1.1 401 Unauthorized
    * 
    * {
    *   "message": "Invalid Token, you will need to Log back in"
    * }
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/
// pass authorization to headers
router.get('/postsbyuserid/', jwt.checkToken(), (req, res) => {
  console.log('This is id: ', req.user.subject)
  const id = req.user.subject;
  Post.getLatestPosts(id)
    .then(post => {
      console.log(post)
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Posts not found...wtf?' });
    });
});

// get by id single post
router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then(p => {res.status(200).json({message: 'Success...', p})})
    .catch(err => {console.log(err); res.status(500).json({ error: err})});
});

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
// POST add more recipes
router.post('/posts/', jwt.checkToken(), (req, res) => {
  const id = req.user.subject;
  const postData = req.body;

  Post.insertPost(postData, id)
    .then(recipe => {
      console.log(recipe);
      res.status(200).json({ message: 'Food idea added', recipe});
    })
    .catch(err => {console.log(err); res.status(500).json({error: err})});
});

module.exports = router;