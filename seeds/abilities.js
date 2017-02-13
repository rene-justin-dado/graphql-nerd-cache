
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('abilities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('abilities').insert({
          ability: 'Build',
          hero_id: null,
          unit_id: 888881
        }),
        knex('abilities').insert({
          ability: 'Build',
          hero_id: null,
          unit_id: 888882
        }),
        knex('abilities').insert({
          ability: 'Build',
          hero_id: null,
          unit_id: 888883
        }),
        knex('abilities').insert({
          ability: 'Repair',
          hero_id: null,
          unit_id: 888881
        }),
        knex('abilities').insert({
          ability: 'Gather',
          hero_id: null,
          unit_id: 888881
        }),
        knex('abilities').insert({
          ability: 'Gather',
          hero_id: null,
          unit_id: 888882
        }),
        knex('abilities').insert({
          ability: 'Gather',
          hero_id: null,
          unit_id: 888883
        })
      ]);
    });
};
