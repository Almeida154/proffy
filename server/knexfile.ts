import path from 'path';

const ip = '172.19.112.1';

module.exports = {
  client: 'pg',
  connection: {
    host: ip,
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
