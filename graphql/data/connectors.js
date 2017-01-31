import Sequelize from 'sequelize'

const db = new Sequelize('starcraft', null, null, {
  dialect: 'sqlite',
  storage: './starcraft.sqlite'
})

const HeroModel = db.define('hero', {
  name: { type: Sequelize.STRING },
  race: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

const UnitModel = db.define('unit', {
  name: { type: Sequelize.STRING },
  race: { type: Sequelize.STRING },
  weapon: { type: Sequelize.STRING },
  armor: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

db.sync({ force: true })
  .then(() => HeroModel.create({
    id: 1,
    name: 'Zeratul',
    race: 'Protoss'
  }))
  .then(() => HeroModel.create({
    id: 2,
    name: 'Alexei Stukov',
    race: 'Zerg'
  }))
  .then(() => HeroModel.create({
    id: 3,
    name: 'James Raynor',
    race: 'Terran'
  }))

db.sync({ force: true })
  .then(() => UnitModel.create({
    name: 'SCV',
    race: 'Terran',
    weapon: 'Fusion Cutter',
    armor: 'Neosteel Frame/Unarmored Pilot'
  }))
  .then(() => UnitModel.create({
    name: 'Probe',
    race: 'Protoss',
    weapon: 'Particle Beam',
    armor: 'Protoss Armor and Shields'
  }))
  .then(() => UnitModel.create({
    name: 'Drone',
    race: 'Zerg',
    weapon: 'Claws',
    armor: 'Zerg Carapace'
  }))

const Hero = db.models.hero
const Unit = db.models.unit

export { Hero, Unit }
