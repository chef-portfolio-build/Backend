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
          "content": "HTTP/1.1 409 Conflict\n{\n\"errors\": [\n  {\n    \"username\": \"Username Already Exists!\"\n  },\n  {\n    \"email\": \"Email Already Exist!\"\n  }\n]\n}",
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
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Wrong login credentials.\"\n}",
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
          "content": "{\n  \"username\": \"thunderkebap\",\n  \"password\": \"nhhHUde^Fd7\",\n  \"email\": \"email@tobeupdated.com\",\n  \"phone\": \"19191234567\",\n  \"cuisine_style\": \"Turkish\"\n}",
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
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List wrong user id",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"The server can not find requested resource. User id: 7\"\n}",
          "type": "json"
        },
        {
          "title": "List User exist",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Wrong login credentials.\"\n}",
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
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/:id",
    "title": "List a recipe/blog by 🆔",
    "version": "0.1.0",
    "name": "Blog",
    "group": "Blog_posts",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Chefs first</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Chefs last</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Chefs homepage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Chefs email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Chefs phone #</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>Chefs biography</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cuisine_style",
            "description": "<p>Chefs style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>Chefs linkedin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter",
            "description": "<p>Chefs twitter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Chefs address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Chefs zip code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Chefs state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Chefs city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Chefs country</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n{\n\"recipes\": [\n{\n  \"id\": 1,\n  \"food_name\": \"Lobster and irish whiskey salad\",\n  \"description\": \"Fresh lobster and irish whiskey served on a bed of lettuce\",\n  \"image\": \"https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg\",\n  \"meal_type\": \"Dinner\",\n  \"is_liked\": false,\n  \"liked\": 0,\n  \"created_at\": \"2019-12-29 01:32:21\",\n  \"last_updated_at\": \"2019-12-31 23:08:00\",\n  \"user_id\": 10,\n  \"first_name\": \"Telly\",\n  \"last_name\": \"Metz\",\n  \"website\": \"rafael.info\",\n  \"email\": \"Friedrich_Purdy@hotmail.com\",\n  \"phone\": \"481.565.7527 x59491\",\n  \"bio\": \"Adipisci ullam voluptatum et ut molestiae facilis totam impedit quibusdam. Neque veritatis cumque quos animi officiis corporis accusantium. Aut quis ad facere inventore omnis vitae reprehenderit. Architecto quaerat minima atque voluptas porro. Ea excepturi nulla repudiandae dolorum.\",\n  \"cuisine_style\": \"Caribbean cuisine\",\n  \"linkedin\": \"https://cicero.name\",\n  \"twitter\": \"Timmothy_Hansen\",\n  \"address\": \"84959 Jennie Ways\",\n  \"zip\": \"43886\",\n  \"state\": \"MA\",\n  \"city\": \"West Groverfort\",\n  \"country\": \"Switzerland\"\n  }\n  ]\n}",
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
    "filename": "src/routes/posts-router-doc.js",
    "groupTitle": "Blog_posts"
  },
  {
    "type": "get",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api",
    "title": "List all blog posts",
    "version": "0.1.0",
    "name": "Blogs",
    "group": "Blog_posts",
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
            "field": "food_name",
            "description": "<p>Recipe name</p>"
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
            "type": "String",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Type of recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_liked",
            "description": "<p>Like or not</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "liked",
            "description": "<p>counter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of creation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_updated_at",
            "description": "<p>Date of last update</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Chef's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n{\n \"posts\": [\n{\n  \"id\": 1,\n  \"food_name\": \"Banana and coriander salad\",\n  \"description\": \"Fresh banana and dried coriander served on a bed of lettuce\",\n  \"image\": \"http://lorempixel.com/640/480/food\",\n  \"meal_type\": \"Dinner\",\n  \"is_liked\": 0,\n  \"liked\": 0,\n  \"created_at\": \"2019-12-29 01:32:21\",\n  \"last_updated_at\": \"2019-12-31 23:08:00\",\n  \"user_id\": 10\n}]\n}",
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
    "filename": "src/routes/posts-router-doc.js",
    "groupTitle": "Blog_posts"
  },
  {
    "type": "get",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/user/:id",
    "title": "List a recipes by chef 🆔",
    "version": "0.1.0",
    "name": "Recipes",
    "group": "Blog_posts",
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
            "type": "Array",
            "optional": false,
            "field": "recipes",
            "description": "<p>Array of recipes by user</p>"
          },
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
            "field": "food_name",
            "description": "<p>Name of the recipe</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Picture of food</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meal_type",
            "description": "<p>Type of meal: (dessert, dinner, etc)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "liked",
            "description": "<p>Liked counter</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_updated_at",
            "description": "<p>Last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Chefs 🆔</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n\n{\n  \"recipes\": [\n  {\n    \"id\": 8,\n    \"food_name\": \"Lemon and almond cupcakes\",\n    \"description\": \"Venison and bean stewed\",\n    \"image\": \"https://data.thefeedfeed.com/recommended/post_4053077.jpeg\",\n    \"meal_type\": \"dessert\",\n    \"is_liked\": 0,\n    \"liked\": 0,\n    \"created_at\": \"2019-12-29 01:32:21\",\n    \"last_updated_at\": \"2019-12-31 23:08:00\",\n    \"user_id\": 1\n    },\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"message\": \"Chef id: 30, has no posts\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://chef-portfolio1-bw.herokuapp.com/api/user/:id"
      }
    ],
    "filename": "src/routes/posts-router-doc.js",
    "groupTitle": "Blog_posts"
  },
  {
    "type": "delete",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/private/posts/:id",
    "title": "Delete a recipe",
    "version": "0.1.0",
    "name": "Delete",
    "group": "Blogs_auth",
    "permission": [
      {
        "name": "first authenticate user to get token"
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
            "field": "message",
            "description": "<p>&quot;Recipe deleted successfully&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "HTTP/1.1 200 OK\n{\n message: 'Recipe deleted successfully.'\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"No recipe with that id: 14\"\n}",
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
