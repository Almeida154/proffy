import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('USERS', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('bio').nullable();
    table.string('avatar').nullable();
    table.string('whatsapp').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('USERS');
}
