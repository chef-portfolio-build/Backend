define({ "api": [
  {
    "type": "post",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/register",
    "title": "Register new user",
    "version": "0.1.0",
    "name": "Create",
    "group": "Auth",
    "permission": [
      {
        "name": "authenticate a blog user register"
      }
    ],
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name, min 5</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user password, min 5</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage, required: ",
        "content": "Minimum of 5 characters!\n{\n  \"username\": \"thunderkebap\",\n  \"password\": \"nhhHUde^Fd7\",\n  \"email\": \"thunder@kebap.com\"\n}",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n  \"id\": 19,\n  \"username\": \"thunderkebap\"\n},\n\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/register"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List User exist",
          "content": "{\n\"errors\": [\n  {\n    \"username\": \"Username Already Exists!\"\n  },\n  {\n    \"email\": \"Email Already Exist!\"\n  }\n]\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth-router-doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/login",
    "title": "Login User",
    "version": "0.1.0",
    "name": "Post",
    "group": "Auth",
    "permission": [
      {
        "name": "authenticate a blog auth user login"
      }
    ],
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name, min 5</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user password, min 5</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage, required: ",
        "content": "Minimum of 5 characters!\n{\n  \"username\": \"thunderkebap\",\n  \"password\": \"nhhHUde^Fd7\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome back user user username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Welcome back jonathan\",\n   \"user\": \"jonathan\",\n},\n\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List User exist",
          "content": "HTTP/1.1 401 Internal Server Error\n{\n  \"message\": \"Wrong login credentials.\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth-router-doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "put",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/:id",
    "title": "Update user info",
    "version": "0.1.0",
    "name": "Write",
    "group": "Auth",
    "permission": [
      {
        "name": "authenticate a blog auth user login"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user password</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          }
        ],
        "Request header": [
          {
            "group": "Request header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Pass it to headers</p>"
          },
          {
            "group": "Request header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Pass it to headers</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example usage, pass any field that needs update: ",
          "content": "{\n  \"username\": \"thunderkebap\",\n  \"password\": \"nhhHUde^Fd7\",\n  \"email\": \"email@tobeupdated.com\"\n}",
          "type": "json"
        },
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Welcome back jonathan\",\n   \"user\": \"jonathan\",\n},\n\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxOSwidXNlcm5hbWUiOiJlcmFscCIsImlhdCI6MTU3NzQ4NTk0MSwiZXhwIjoxNTc4MDkwNzQxfQ.rHx8rKLqhZnzgBzDgPHXNH8z8Ger9xen95PPKEbsJ9I\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List User exist",
          "content": "HTTP/1.1 401 Internal Server Error\n{\n  \"message\": \"Wrong login credentials.\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/auth-router-doc.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api",
    "title": "Retrieve all blog posts",
    "version": "1.0.0",
    "name": "GetAll",
    "group": "Blog_Posts",
    "permission": [
      {
        "name": "no authentication required"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The post id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Food name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short description of food idea</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Add image url</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_like",
            "description": "<p>Like or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date string</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Creators id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": " HTTPS 200 OK\n [{\n    \"id\": 1,\n    \"food_name\": \"Banana and coriander salad\",\n    \"description\": \"Fresh banana and dried coriander served on a bed of lettuce\",\n    \"image\": \"http://lorempixel.com/640/480/food\",\n    \"is_liked\": 0,\n    \"created_at\": \"\",\n    \"user_id\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/server.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "get",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/postsbyuserid",
    "title": "Show chefs recipes only",
    "version": "0.1.0",
    "name": "Get",
    "group": "Blogs_auth",
    "permission": [
      {
        "name": "authenticate user passing token to header"
      }
    ],
    "parameter": {
      "fields": {
        "Request header": [
          {
            "group": "Request header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Array",
            "description": "<p>array of objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example array",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"id\": 17,\n  \"food_name\": \"Horseradish and goose salad\",\n  \"description\": \"A crisp salad featuring fresh horseradish and goose\",\n  \"image\": \"http://lorempixel.com/640/480/food\",\n  \"is_liked\": 0,\n  \"created_at\": \"2019-12-29 02:14:26\",\n  \"user_id\": 7\n},\n{\n  \"id\": 18,\n  \"food_name\": \"Kidney and blackberry pie\",\n  \"description\": \"A puff pasty case filled with kidney and fresh blackberry\",\n  \"image\": \"http://lorempixel.com/640/480/food\",\n  \"is_liked\": 0,\n  \"created_at\": \"2019-12-29 02:16:27\",\n  \"user_id\": 7\n}\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/poatsbyuserid"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"message\": \"Hello Master Chef, you have no posts yet, please start posting about your delicious recipes\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"message\": \"Invalid Token, you will need to Log back in\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/bloggers/bloggers-router-doc.js",
    "groupTitle": "Blogs_auth"
  },
  {
    "type": "post",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/posts",
    "title": "Add new recipe",
    "version": "0.1.0",
    "name": "Post",
    "group": "Blogs_auth",
    "permission": [
      {
        "name": "authenticate a blog auth user login"
      }
    ],
    "parameter": {
      "fields": {
        "Request header": [
          {
            "group": "Request header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "food_name",
            "description": "<p>Recipe name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Recipe description</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Link to image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage, required: ",
        "content": "\n{\n  \"food_name\": \"Horseradish and goose salad\",\n  \"description\": \"A crisp salad featuring fresh horseradish and goose\",\n  \"image\": \"http://lorempixel.com/640/480/food\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Food idea added&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Food idea added\",\n  \"recipe\": [\n  {\n    \"id\": 18,\n    \"food_name\": \"Kidney and blackberry pie\",\n    \"description\": \"A puff pasty case filled with kidney and fresh blackberry\",\n    \"image\": \"http://lorempixel.com/640/480/food\",\n    \"is_liked\": 0,\n    \"created_at\": \"2019-12-29 02:16:27\",\n    \"user_id\": 7\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/posts"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Unauthorized error",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid Token, you will need to Log back in\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/bloggers/bloggers-router-doc.js",
    "groupTitle": "Blogs_auth"
  },
  {
    "type": "put",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id",
    "title": "Edit a recipe",
    "version": "0.1.0",
    "name": "Put",
    "group": "Blogs_auth",
    "permission": [
      {
        "name": "authenticate user first to get token"
      }
    ],
    "parameter": {
      "fields": {
        "Request header": [
          {
            "group": "Request header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "food_name",
            "description": "<p>Recipe name</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Recipe description</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Link to image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage, required: ",
        "content": "\n{\n  \"food_name\": \"Horseradish and goose salad\",\n  \"description\": \"A crisp salad featuring fresh horseradish and goose\",\n  \"image\": \"http://lorempixel.com/640/480/food\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Recipe updated&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"food_name,description,image updated successfully. \",\n  \"changes\": {\n  \"food_name\": \"Mash patatos\",\n  \"description\": \"Boiled patatos with creamy cheese\",\n  \"image\": \"http://lorempixel.com/640/480/food\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List Error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Hello chef username, you have no posts yet, please start posting about your delicious recipes\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized error",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid Token, you will need to Log back in\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/auth/bloggers/bloggers-router-doc.js",
    "groupTitle": "Blogs_auth"
  }
] });
