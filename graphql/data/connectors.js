import Sequelize from 'sequelize'

const db = new Sequelize('heroes', null, null, {
  dialect: 'sqlite',
  storage: './starcraft.db'
})
