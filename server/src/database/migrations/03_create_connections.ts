import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('CONNECTIONS', (table) => {
    table.increments('id').primary();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .integer('student_user_id')
      .notNullable()
      .references('id')
      .inTable('USERS')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('class_schedule_id')
      .notNullable()
      .references('id')
      .inTable('CLASS_SCHEDULE')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('CONNECTIONS');
}
