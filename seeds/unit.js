
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('unit').insert({
          name: 'SCV',
          race: 'Terran',
          weapon: 'Fusion Cutter',
          armor: 'Light Neosteel Vehicle Plating'
        }),
        knex('unit').insert({
          name: 'Probe',
          race: 'Protoss',
          weapon: 'Particle Beam',
          armor: 'Plasma Shields/Protoss Armor'
        }),
        knex('unit').insert({
          name: 'Drone',
          race: 'Zerg',
          weapon: 'Claws',
          armor: 'Carapace'
        }),
        knex('unit').insert({
          name: 'Marine',
          race: 'Terran',
          weapon: 'C-14 Impaler Gauss Rifle',
          armor: 'CMC 300/400 Combat Suit'
        }),
        knex('unit').insert({
          name: 'Zealot',
          race: 'Protoss',
          weapon: 'Psi Blades',
          armor: 'Plasma Shields/Protoss Armor'
        }),
        knex('unit').insert({
          name: 'Zergling',
          race: 'Zerg',
          weapon: 'Claws, Fangs',
          armor: 'Light Zerg Carapace'
        })
      ])
    })
}
