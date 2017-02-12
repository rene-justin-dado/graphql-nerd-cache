const config = require('../../knexfile.js')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

export const Hero = (name) => (
  knex('hero')
    .where({ name })
    .then(heroesArray => heroesArray[0])
    .then(namedHero => namedHero)
    .catch(err => console.error(err))
)

export const Unit = (name) => (
  knex('unit')
    .where({ name })
    .then(unitsArray => unitsArray[0])
    .then(namedUnit => namedUnit)
    .catch(err => console.error(err))
)
