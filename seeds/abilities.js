
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('abilities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('abilities').insert({
          ability: 'Build'
        }),
        knex('abilities').insert({
          ability: 'Repair'
        }),
        knex('abilities').insert({
          ability: 'Gather'
        })
      ]);
    });
};
