// POST register new chef
/**
    * @api {post} https://chef-portfolio1-bw.herokuapp.com/api/auth/register Register new user
    * @apiVersion 0.1.0
    * @apiName Create
    * @apiGroup Auth
    * @apiPermission authenticate a blog user register
    *
    * @apiParam (Request body) {String} username The user name, min 5
    * @apiParam (Request body) {String} password The user password, min 5
    * @apiParam (Request body) {String} email The user email
    * @apiExample {js} Example usage, required: 
    * Minimum of 5 characters!
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    *   "email": "thunder@kebap.com"
    * }
    *
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *   "user": {
    *   "id": 19,
    *   "username": "thunderkebap"
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/register
    * 
    * @apiErrorExample {json} List User exist
    * {
    * "errors": [
    *   {
    *     "username": "Username Already Exists!"
    *   },
    *   {
    *     "email": "Email Already Exist!"
    *   }
    * ]
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/
   //*****************************************************
   //***************************************************** */

   // login user
/**
    * @api {post} https://chef-portfolio1-bw.herokuapp.com/api/auth/login Login User
    * @apiVersion 0.1.0
    * @apiName Post
    * @apiGroup Auth
    * @apiPermission authenticate a blog auth user login
    *
    * @apiParam (Request body) {String} username The user name, min 5
    * @apiParam (Request body) {String} password The user password, min 5
    * @apiExample {json} Example usage, required: 
    * Minimum of 5 characters!
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    * }
    * @apiSuccess
    * message Welcome back user
    * user username
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *    "message": "Welcome back jonathan",
    *    "user": "jonathan",
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/login
    * 
    * @apiErrorExample {json} List User exist
    * HTTP/1.1 401 Internal Server Error
    *{
    *   "message": "Wrong login credentials."
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

    // **************************************************
    // ***************************************************

    // Edit user information PUT
/**
    * @api {put} https://chef-portfolio1-bw.herokuapp.com/api/auth/:id Update user info
    * @apiVersion 0.1.0
    * @apiName Write
    * @apiGroup Auth
    * @apiPermission authenticate a blog auth user login
    * 
    * @apiParam {Number} id Users unique ID.
    *
    * @apiParam (Request body) {String} username The user name
    * @apiParam (Request body) {String} password The user password
    * @apiParam (Request body) {String} email The user email
    * @apiSuccessExample {json} Example usage, pass any field that needs update: 
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    *   "email": "email@tobeupdated.com"
    * }
    * 
    * @apiParam (Request header) {String} Authorization Pass it to headers
    * @apiParam (Request header) {String} token Pass it to headers
    * 
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    *{
    *    "message": "Welcome back jonathan",
    *    "user": "jonathan",
    *},
    * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I"
    *}
    * @apiSampleRequest https://chef-portfolio1-bw.herokuapp.com/api/auth/login
    * 
    * @apiErrorExample {json} List User exist
    * HTTP/1.1 401 Internal Server Error
    *{
    *   "message": "Wrong login credentials."
    *}
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/