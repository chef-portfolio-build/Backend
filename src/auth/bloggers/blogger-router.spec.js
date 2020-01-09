const supertest = require('supertest');
// const bloggerRouter = require('./blogger-router.js');
const blogger = require('../../api/server')

describe('Authentication group', () => {
  it('should require authentication', async () => {
    const response = await supertest(blogger).get('/api/private/recipesbychefid');
    // console.log(response)
    expect(response.status).toEqual(401)
  })

  it('should respond with JSON object', async () => {
    const response = await supertest(blogger).get('/api/private/recipesbychefid');
    // regular expression to check the value
    expect(response.type).toMatch(/json/i)
  });

  // it('should get a valid token for user: testuser', () => {
  //   supertest(blogger)
  //     .set('Authorization')
  // });
});

// var auth = {};
// beforeEach(loginUser(auth))

// async function loginUser(auth) {
//   return function(done) {
//     await supertest(blogger)
//       .post('/login')
//       .send({
//         username: 'testuser',
//         password: 'password',
//       })
//       .expect(response.status).toEqual(200)
//       .end(onResponse)

//       function onResponse(err, res) {
//         auth.token = res.body.token;
//         return done()
//       }
//   }
// }