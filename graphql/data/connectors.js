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
