const request = require('supertest');
const chef = require('../api/server.js');

describe('user authentications', () => {
  it('should login a user', async () => {
    const userLogin = {
      username: 'test_user',
      password: 'password'
    }

    const response = await request(chef).post('/api/auth/login').send({
      username: 'test_user',
      password: 'password'
    })

    expect(response.status).toEqual(200)

  });
});

function loginUser() {
  return function(done) {
      server
          .post('/login')
          .send({ username: 'test_user', password: 'password' })
          .expect(302)
          // .expect('Location', '/')
          .end(onResponse);

      function onResponse(err, res) {
         if (err) return done(err);
         return done();
      }
  };
};