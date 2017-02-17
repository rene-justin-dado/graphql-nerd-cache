
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('unit').insert({
          id: 888881,
          name: 'SCV',
          race: 'Terran',
          weapon: 'Fusion Cutter',
          armor: 'Light Neosteel Vehicle Plating',
          hp: 45
        }),
        knex('unit').insert({
          id: 888882,
          name: 'Probe',
          race: 'Protoss',
          weapon: 'Particle Beam',
          armor: 'Plasma Shields/Protoss Armor',
          hp: 20,
          shields: 20
        }),
        knex('unit').insert({
          id: 888883,
          name: 'Drone',
          race: 'Zerg',
          weapon: 'Claws',
          armor: 'Carapace',
          hp: 40
        }),
        knex('unit').insert({
          id: 888884,
          name: 'Marine',
          race: 'Terran',
          weapon: 'C-14 Impaler Gauss Rifle',
          armor: 'CMC 300/400 Combat Suit',
          hp: 45
        }),
        knex('unit').insert({
          id: 888885,
          name: 'Zealot',
          race: 'Protoss',
          weapon: 'Psi Blades',
          armor: 'Plasma Shields/Protoss Armor',
          hp: 100,
          shields: 50
        }),
        knex('unit').insert({
          id: 888886,
          name: 'Zergling',
          race: 'Zerg',
          weapon: 'Claws, Fangs',
          armor: 'Light Zerg Carapace',
          hp: 35
        })
      ])
    })
}
