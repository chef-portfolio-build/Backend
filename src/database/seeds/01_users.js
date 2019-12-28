
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'sunny',
          email: 'sunny@email.com',
          password: 'dorwssap'
        },
        {
          id: 2,
          username: 'norman',
          email: 'norman@email.com',
          password: 'dorwssap'
        },
        {
          id: 3,
          username: 'susan',
          email: 'susan@email.com',
          password: 'dorwssap'
        },
        {
          id: 4,
          username: 'eralp',
          email: 'eralp@email.com',
          password: 'password'
        }
      ]);
    });
};
