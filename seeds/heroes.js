
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('heroes').insert({id: 9997, name: 'James Raynor'}),
        knex('heroes').insert({id: 9998, name: 'Zeratul'}),
        knex('heroes').insert({id: 9999, name: 'Dehaka'})
      ])
    })
}
