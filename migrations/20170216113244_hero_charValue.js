exports.up = function(knex, Promise) {
  return knex.schema.table('hero', (table) => {
    table.integer('charValue')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hero', (table) => {
    table.dropColumn('charValue')
  })
};
