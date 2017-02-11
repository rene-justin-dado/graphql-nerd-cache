import { Hero, Unit } from './connectors'
const resolvers = {
  Query: {
    hero(_, args) {
      return Hero.find()
    },
    unit(_, args) {
      return Unit.find()
    }
  }
}

export default resolvers
