exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('abilities', (table) => {
    table.increments('id').primary()
    table.string('ability')
    table.integer('hero_id')
    table.integer('unit_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('abilities')
};
