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
    * @apiErrorExample {json} List error
    * HTTP/1.1 409 Conflict
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
    * @apiErrorExample {json} List error
    * HTTP/1.1 401 Unauthorized
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
    * @api {put} https://chef-portfolio1-bw.herokuapp.com/api/auth/update Edit user info
    * @apiVersion 0.1.0
    * @apiName Update
    * @apiGroup Auth
    * @apiPermission authenticate chef first, 
    * pass data to any field that needs update
    * @apiParam (Request header) {String} Authorization Pass token to header
    *
    * @apiParam (Request body) {String} username The user name
    * @apiParam (Request body) {String} password The user password
    * @apiParam (Request body) {String} email The user email
    * @apiSuccessExample {json} Example usage 
    * {
    *   "username": "thunderkebap",
    *   "password": "nhhHUde^Fd7",
    *   "email": "email@tobeupdated.com",
    *   "phone": "19191234567",
	  *   "cuisine_style": "Turkish"
    * }
    * 
    * 
    * 
    * @apiSuccessExample {json} Success example
    * HTTP/1.1 200 OK
    * {
    *   "message": "first_name,last_name updated successfully"
    * }
    * 
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 401 Unauthorized
    * {
    *   "errors": [
    *   {
    *     "token": "Invalid token, you will need to log back in"
    *   }
    *  ]
    * }
    * 
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
    **/

// Delete chef account
// **************************
// ************************************    
/**
    * @api {put} https://chef-portfolio1-bw.herokuapp.com/api/auth/remove Delete user
    * 
    * @apiVersion 0.1.0
    * @apiName Delete
    * @apiGroup Auth
    * @apiPermission authenticate chef first, 
    * 
    * @apiParam (Request header) {String} Authorization Pass token to header
    * 
    * @apiSuccessExample {json} Success example
    * {
    *    "message": "User with 🆔 deleted.."
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 401 Unauthorized
    * {
    *   "error": "No Token Provided, you will need to Login"
    * }
    * 
    * @apiErrorExample {json} List error
    * HTTP/1.1 400 Bad Request
    * {
    *   "message": "No user with 🆔 14 in database.."
    * }
    * @apiErrorExample {json} List error
    * HTTP/1.1 500 Internal Server Error
*/