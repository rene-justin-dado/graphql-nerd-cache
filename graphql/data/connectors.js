import Sequelize from 'sequelize'

const db = new Sequelize('starcraft', 'postgres', 'n@chNagala$', {
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
  // storage: './starcraft.sqlite'
})

const HeroModel = db.define('hero', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING },
  race: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

HeroModel.sync({ force: true })
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

const UnitModel = db.define('unit', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: Sequelize.STRING },
  race: { type: Sequelize.STRING },
  weapon: { type: Sequelize.STRING },
  armor: { type: Sequelize.STRING }
}, {
  freezeTableName: true
})

const AbilitiesModel = db.define('abilities', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ability: { type: Sequelize.STRING },
  abilityId: { type: Sequelize.INTEGER }
}, {
  freezeTableName: true
})

UnitModel.AbilitiesModel = UnitModel.hasMany(AbilitiesModel, {as: 'abilities'})
AbilitiesModel.UnitModel = AbilitiesModel.belongsTo(UnitModel, {through: UnitModel})

UnitModel.sync({ force: true })
  .then(() => UnitModel.create({
    id: 9991,
    name: 'SCV',
    race: 'Terran',
    weapon: 'Fusion Cutter',
    armor: 'Neosteel Frame/Unarmored Pilot'
  }), {
    include: [UnitModel.AbilitiesModel]
  })
  .then(() => UnitModel.create({
    id: 9992,
    name: 'Probe',
    race: 'Protoss',
    weapon: 'Particle Beam',
    armor: 'Protoss Armor and Shields'
  }), {
    include: [UnitModel.AbilitiesModel]
  })
  .then(() => UnitModel.create({
    id: 9993,
    name: 'Drone',
    race: 'Zerg',
    weapon: 'Claws',
    armor: 'Zerg Carapace'
  }), {
    include: [UnitModel.AbilitiesModel]
  })

// AbilitiesModel.sync({ force: true })
//   .then(() => AbilitiesModel.create({
//     ability: 'Build'
//   }))
//   .then(() => AbilitiesModel.create({
//     ability: 'Repair'
//   }))

const Hero = db.models.hero
const Unit = db.models.unit

export { Hero, Unit }
