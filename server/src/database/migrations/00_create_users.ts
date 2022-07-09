import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('USERS', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('bio').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('USERS');
}
