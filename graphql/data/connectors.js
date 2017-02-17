const config = require('../../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

export const Hero = (id = null, name = '') => {
  return (
    knex('hero')
      .where({ name })
      .orWhere({ id })
      .then(namedHero => namedHero[0])
      .catch(err => console.error(err))
  )
}

export const Heroes = () => {
  return (
    knex('hero')
      .then(heroArray => heroArray)
      .catch(err => console.error(err))
  )
}

export const Unit = (name) => (
  knex('unit')
    .where({ name })
    .join('abilities', 'unit.id', '=', 'unit_id')
    .select()
    .then(unitsArray => {
      let abilities = []
      unitsArray.forEach(unit => abilities.push({
        id: unit.id, ability: unit.ability
      }))
      return Object.assign({
        id: unitsArray[0].unit_id,
        abilities: abilities
      },
        ...unitsArray
      )
    })
    .then(namedUnit => namedUnit)
    .catch(err => console.error(err))
)
