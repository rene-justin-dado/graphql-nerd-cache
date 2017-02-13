const config = require('../../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

export const Hero = (name) => {
  let heroId = null
  return (
    knex('hero')
      .where({ name })
      .then(namedHero => namedHero[0])
      .catch(err => console.error(err))
  )
}

export const Unit = (name) => (
  knex('unit')
    .where({ name })
    .leftJoin('abilities', 'unit.id', '=', 'unit_id')
    .select()
    .then(unitsArray => {
      let abilities = []
      unitsArray.forEach(unit => abilities.push({
        id: unit.id, ability: unit.ability
      }))
      return {
        id: unitsArray[0].unit_id,
        name: unitsArray[0].name,
        race: unitsArray[0].race,
        weapon: unitsArray[0].weapon,
        armor: unitsArray[0].armor,
        abilities: abilities
      }
    })
    .then(namedUnit => namedUnit)
    .catch(err => console.error(err))
)
