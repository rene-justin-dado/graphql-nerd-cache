exports.up = function(knex, Promise) {
 return knex.schema.createTableIfNotExists('unit', (table) => {
   table.increments('id').primary()
   table.string('name')
   table.string('race')
   table.string('weapon')
   table.string('armor')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists()
};
