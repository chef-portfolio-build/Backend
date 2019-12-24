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
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/database/seeds' },
  },
};

