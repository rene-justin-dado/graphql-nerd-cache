import Sequelize from 'sequelize'

const db = new Sequelize('starcraftData', null, null, {
  dialect: 'sqlite',
  storage: './starcraft.db'
})

const HeroModel = db.define('hero', {
  name: { type: Sequelize.STRING }
})

const UnitModel = db.define('unit', {
  name: { type: Sequelize.STRING },
  race: { type: Sequelize.STRING },
  weapon: { type: Sequelize.STRING },
  armor: { type: Sequelize.STRING }
})

const RaceModel = db.define('race', {
  name: { type: Sequelize.STRING }
})

HeroModel.hasOne(RaceModel)
UnitModel.hasOne(RaceModel)
RaceModel.belongsToMany(HeroModel, {through: 'HeroRace'})
RaceModel.belongsToMany(UnitModel, {through: 'UnitRace'})

const Hero = db.models.hero
const Unit = db.models.unit
const Race = db.models.race

export { Hero, Race, Unit }
