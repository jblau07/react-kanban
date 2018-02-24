
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('priority').notNullable();
    table.string('status').notNullable();
    table.string('created_by').notNullable();
    table.string('assigned_to').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
