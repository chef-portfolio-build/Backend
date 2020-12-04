// connection to the DB
const db = require('../database/dbConfig.js');
// const prepTestDB = require('../__test__/prepTestDB.js');

// beforeEach(() => db('chef').truncate())
// beforeEach(() => db.seed.run());
// beforeEach(prepTestDB);

//the data access file we're testing
const Users = require('./auth-model');

describe('Users model access', () => {
  describe('insert() new user', () => {
    //  this function executes and clears out the table before each test
    beforeEach(async () => {
      await db('chef').truncate();
    })
    it('should insert a new chef to the db', async () => {
      const records = await db('chef');
      expect(records).toHaveLength(0);

      await Users.addUser({
        username: 'test_user',
        password: 'password',
        email: 'test@test.com'
      });
      const users = await db('chef');
      expect(users).toHaveLength(1)
    });
  });

  describe('Find user', () => {
    it('should find chef by user id', async () => {
      const id = 1;
      const user = await Users.findById(id)
      expect(user.id).toBe(1)
    });
  });
});

