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
    .leftJoin('abilities', 'unit.id', '=', 'unit_id')
    .select('unit.id', 'name', 'race', 'weapon', 'armor', 'hp', 'shields', 'abilities.id AS abilityId', 'ability')
    .then(unitsArray => {
      let abilities = []
      if (unitsArray) {
        unitsArray.forEach(unit => abilities.push({
          id: unit.abilityId, ability: unit.ability
        }))
        return Object.assign({
          id: unitsArray[0].unit_id,
          abilities: abilities
        },
          ...unitsArray
        )
      }
    })
    .then(namedUnit => namedUnit)
    .catch(err => console.error(err))
  )

export const unitHasNoAbilities = () => (
  knex('unit')
    .leftJoin('abilities', 'unit.id', '=', 'unit_id')
    .select('unit.id', 'name', 'race', 'weapon', 'armor', 'hp', 'shields')
    .whereNull('abilities.id')
    .then(unitsArray => unitsArray.map((unit) => Object.assign({abilities: null}, unit)))
    .catch(err => console.error(err))
)

export const unitHasAbilities = () => (
  knex('unit')
    .leftJoin('abilities', 'unit.id', '=', 'unit_id')
    .whereNotNull('abilities.ability')
    .select('unit.id', 'name', 'race', 'weapon', 'armor', 'hp', 'shields', 'abilities.id AS abilityId', 'ability')
    .groupBy('unit.id', 'abilityId')
    .orderBy('unit.id')
    .then(unitsArray => {
      let abilities = []
      let unitAbilities = []
      return unitsArray.reduce((prevUnit, currUnit, i, arr) => {
        if (prevUnit.id === currUnit.id) {
          abilities.push({id: prevUnit.abilityId, ability: prevUnit.ability})
        }
        if (prevUnit.id !== currUnit.id) {
          abilities.push({id: prevUnit.abilityId, ability: prevUnit.ability})
          unitAbilities.push(Object.assign({abilities: abilities}, prevUnit))
          abilities = []
        }
        if (i === arr.length - 1) {
          abilities.push({id: currUnit.abilityId, ability: currUnit.ability})
          unitAbilities.push(Object.assign({abilities: abilities}, currUnit))
          return unitAbilities
        }
        return currUnit
      })
    })
    .then(data => data)
    .catch(err => console.error(err))
)

export const Units = () => {
}
