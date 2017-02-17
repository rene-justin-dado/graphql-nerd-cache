exports.up = function(knex, Promise) {
  return knex.schema.table('unit', table => {
    table.integer('shields')
    table.integer('hp')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('unit', table => {
    table.dropColumn('shields')
    table.dropColumn('hp')
  })
};
