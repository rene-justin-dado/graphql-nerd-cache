exports.up = function(knex, Promise) {
  return knex.schema.createTable('abilities', (table) => {
    table.increments('id').primary()
    table.string('ability')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('abilities')
};
