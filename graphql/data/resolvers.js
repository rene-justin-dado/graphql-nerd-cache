import { Hero, Unit } from './connectors'
const resolvers = {
  Query: {
    hero (_, args) {
      return Hero.find({ where: args })
    },
    unit (_, args) {
      return Unit.find({ where: args })
    }
  },

  Unit: {
    abilities (ability) {
      return ability.getUnitAbility()
    }
  }
}

export default resolvers
