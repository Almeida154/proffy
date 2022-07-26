import Knex from 'knex';

const db = Knex({
  client: 'pg',
  connection: {
    host: process.env.HOST,
    port: 5432,
    user: 'proffy',
    password: 'proffy',
    database: 'proffy',
  },
  useNullAsDefault: true,
});

export default db;
