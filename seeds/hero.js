
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hero').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hero').insert({
          id: 999991,
          name: 'James Raynor',
          race: 'Terran',
          charValue: 10
        }),
        knex('hero').insert({
          id: 999992,
          name: 'Matt Horner',
          race: 'Terran',
          charValue: 7
        }),
        knex('hero').insert({
          id: 999993,
          name: 'Alarak',
          race: 'Protoss',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999994,
          name: 'Vorazun',
          race: 'Protoss',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999995,
          name: 'Dehaka',
          race: 'Zerg',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999996,
          name: 'Kerrigan',
          race: 'Zerg',
          charValue: 10
        })
      ])
    })
}
