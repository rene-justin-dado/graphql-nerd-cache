import Sequelize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'

const db = new Sequelize('starcraft', null, null, {
  dialect: 'sqlite',
  storage: './starcraft.sqlite'
})

const HeroModel = db.define('hero', {
  name: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

const UnitModel = db.define('unit', {
  name: { type: Sequelize.STRING },
  faction: { type: Sequelize.STRING },
  weapon: { type: Sequelize.STRING },
  armor: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

const RaceModel = db.define('race', {
  name: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

HeroModel.hasOne(RaceModel)
UnitModel.hasOne(RaceModel)
RaceModel.belongsToMany(HeroModel, {through: 'HeroRace'})
RaceModel.belongsToMany(UnitModel, {through: 'UnitRace'})

casual.seed(123)
db.sync({ force: true })
  .then(() => HeroModel.create({
      name: "Zeratul"
    }))
  .then(() => HeroModel.create({
      name: "Alexei Stukov"
    }))
  .then(() => HeroModel.create({
      name: "James Raynor"
    }))

const Hero = db.models.hero
const Unit = db.models.unit
const Race = db.models.race

export { Hero, Race, Unit }
