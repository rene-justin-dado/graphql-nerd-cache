
exports.up = function(knex, Promise) {
  return knex.schema.createTable('heroes', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('race')
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('heroes')
};
