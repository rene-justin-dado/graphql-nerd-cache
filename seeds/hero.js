
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hero').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hero').insert({
          id: 999991,
          name: 'James Raynor',
          faction: 'Terran',
          charValue: 10
        }),
        knex('hero').insert({
          id: 999992,
          name: 'Matt Horner',
          faction: 'Terran',
          charValue: 7
        }),
        knex('hero').insert({
          id: 999993,
          name: 'Alarak',
          faction: 'Protoss',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999994,
          name: 'Vorazun',
          faction: 'Protoss',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999995,
          name: 'Dehaka',
          faction: 'Zerg',
          charValue: 8
        }),
        knex('hero').insert({
          id: 999996,
          name: 'Kerrigan',
          faction: 'Zerg',
          charValue: 10
        })
      ])
    })
}
