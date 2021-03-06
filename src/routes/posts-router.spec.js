const request = require('supertest')
const server = require('../api/server')

describe('All recipe blogs operations', () => {
  it('should /api get all posts', async () => {
    const response = await request(server).get('/api');
    
    expect(response.status).toEqual(200)
  });

  // only user 🆔 1 is in the database
  it('should return 200 /:id/chef', async () => {
    const response = await request(server).get('/api/2/chef');

    expect(response.status).toEqual(200);
    expect(response.type).toMatch(/json/i);
  });
  
  it('should get all "JSON" data recipes by chef /:id/chef ', async () => {
    const response = await request(server).get('/api/1/chef');

    expect(response.type).toMatch(/json/i);
  });

  it('should show single recipe by 🆔', async () => {
    const response = await request(server).get('/api/25');
    
    expect(response.type).toMatch(/json/i)
  });
});

