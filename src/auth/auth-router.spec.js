const server = require('../api/server.js');
const request = require('supertest');
const db = require('../database/dbConfig.js');
// const prepTestDB = require('../__test__/prepTestDB.js');

// beforeEach(() => db('chef').truncate())
beforeEach(() => db.seed.run());
// beforeEach(prepTestDB);

describe('user authentications', () => {
  it('should create a user', async () => {
    const response = await request(server)
          .post('/api/auth/register')
          .send({ username: 'test_user', password: 'password', email: 'testing@test.com'});
          console.log(response.body)
    expect(response.status).toBe(201);
    expect(response.type).toMatch(/json/i)
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("token");

  });

  it('should login a user', async () => {
    const userLogin = {
      username: 'test_user',
      password: 'password'
    };

    const response = await request(server).post('/api/auth/login').send({
      username: 'test_user',
      password: 'password'
    });
    console.log(response.body)
    expect(response.status).toEqual(200)

  });
});

