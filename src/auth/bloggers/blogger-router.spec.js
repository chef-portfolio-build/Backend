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
});

