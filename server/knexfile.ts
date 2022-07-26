import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    port: 5432,
    user: 'proffy',
    password: 'proffy',
    database: 'proffy',
  },
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'database',
      'migrations'
    ),
  },
  useNullAsDefault: true,
};
