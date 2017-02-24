exports.up = function(knex, Promise) {
  return knex.schema.table('hero', table => {
    table.dropColumn('race')
    table.string('faction')
    table.string('sub-faction')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hero', table => {
    table.dropColumns('faction', 'sub-faction')
    table.string('race')
  })
};
