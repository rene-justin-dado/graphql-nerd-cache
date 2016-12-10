import { Hero, Unit } from './connectors'
const resolvers = {
  Query: {
    hero(_, args) {
      return Hero.find({ where: args })
    },
    unit(_, args) {
      return Unit.find({ where: args})
    }
  }
}

export default resolvers
