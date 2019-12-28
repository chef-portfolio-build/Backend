define({ "api": [
  {
    "type": "post",
    "url": "https://chef-portfolio1-bw.herokuapp.com/api/auth/register",
    "title": "Create a Chef Blogger User",
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
    "filename": "src/auth/auth-router.js",
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
  }
] });
