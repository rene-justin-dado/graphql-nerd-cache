const config = require('../../knexfile')[process.env.NODE_ENV || 'development'],
      knex = require('knex')(config)

module.exports = {
  Hero,
  Unit
}

const Hero = (name) => (
  knex('hero')
    .where({ name })
    .then(hero => hero)
    .catch(err => console.error(err))
)

const Unit = (name) => (
  knex('unit')
  .where({ name })
  .then(unit => unit)
  .catch(err => console.error(err))
)

// import Sequelize from 'sequelize'
//
// const db = new Sequelize('starcraft', 'postgres', 'n@chNagala$', {
//   dialect: 'postgres',
//   pool: {
//     max: 10,
//     min: 0,
//     idle: 10000
//   }
//   // storage: './starcraft.sqlite'
// })
//
// const HeroModel = db.define('hero', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: { type: Sequelize.STRING },
//   race: { type: Sequelize.STRING }
// }, {
//   freezeTableName: true
// })
//
// HeroModel.sync({ force: true })
//   .then(() => HeroModel.create({
//     id: 1,
//     name: 'Zeratul',
//     race: 'Protoss'
//   }))
//   .then(() => HeroModel.create({
//     id: 2,
//     name: 'Alexei Stukov',
//     race: 'Zerg'
//   }))
//   .then(() => HeroModel.create({
//     id: 3,
//     name: 'James Raynor',
//     race: 'Terran'
//   }))
//
// const UnitModel = db.define('unit', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: { type: Sequelize.STRING },
//   race: { type: Sequelize.STRING },
//   weapon: { type: Sequelize.STRING },
//   armor: { type: Sequelize.STRING },
//   unitAbilityId: { type: Sequelize.STRING }
// }, {
//   freezeTableName: true
// })
//
// const AbilityModel = db.define('ability', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   ability: { type: Sequelize.STRING }
// }, {
//   freezeTableName: true
// })
//
// AbilityModel.sync({ force: true })
//   .then(() => AbilityModel.create({
//     ability: 'Build'
//   }))
//   .then(() => AbilityModel.create({
//     ability: 'Build'
//   }))
//   .then(() => AbilityModel.create({
//     ability: 'Build'
//   }))
//   .then(() => AbilityModel.create({
//     ability: 'Repair'
//   }))
//
// UnitModel.sync({ force: true })
// .then(() => UnitModel.create({
//   id: 9991,
//   name: 'SCV',
//   race: 'Terran',
//   weapon: 'Fusion Cutter',
//   armor: 'Neosteel Frame/Unarmored Pilot',
//   unitAbilityId: 1
// }))
// .then(() => UnitModel.create({
//   id: 9992,
//   name: 'Probe',
//   race: 'Protoss',
//   weapon: 'Particle Beam',
//   armor: 'Protoss Armor and Shields',
//   unitAbilityId: 1
// }))
// .then(() => UnitModel.create({
//   id: 9993,
//   name: 'Drone',
//   race: 'Zerg',
//   weapon: 'Claws',
//   armor: 'Zerg Carapace',
//   unitAbilityId: 1
// }))
//
// UnitModel.belongsTo(AbilityModel, {as: 'unitAbility'})
//
// export const Hero = db.models.hero
// export const Unit = db.models.unit
