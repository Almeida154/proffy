import Knex from 'knex';

const ip = '172.19.112.1';

const db = Knex({
  client: 'pg',
  connection: {
    host: ip,
    port: 5432,
    user: 'proffy',
    password: 'proffy',
    database: 'proffy',
  },
  useNullAsDefault: true,
});

export default db;
