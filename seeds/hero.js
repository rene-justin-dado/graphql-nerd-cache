
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hero').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hero').insert({
          name: 'James Raynor',
          race: 'Terran'
        }),
        knex('hero').insert({
          name: 'Matt Horner',
          race: 'Terran'
        }),
        knex('hero').insert({
          name: 'Alarak',
          race: 'Protoss'
        }),
        knex('hero').insert({
          name: 'Vorazun',
          race: 'Protoss'
        }),
        knex('hero').insert({
          name: 'Dehaka',
          race: 'Zerg'
        }),
        knex('hero').insert({
          name: 'Kerrigan',
          race: 'Zerg'
        })
      ])
    })
}
