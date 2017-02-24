exports.up = function(knex, Promise) {
    return knex.schema.table('unit', table => {
      table.dropColumn('race')
      table.string('faction')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('unit', table => {
    table.dropColumn('faction')
    table.string('race')
  })
};
