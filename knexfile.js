module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './src/database/chefblog.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './src/database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/database/seeds' },
  },
  // test database config
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
  // deploy to heroku
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/database/seeds' },
  },
};

