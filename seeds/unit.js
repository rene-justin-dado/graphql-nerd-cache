
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
        })
      ]);
    });
};
