import { Hero, Unit } from './connectors'

const resolvers = {
  Query: {
    hero(_, args) {
      return Hero(args.name)
    },
    unit(_, args) {
      return Unit(args.name)
    }
  }
}

export default resolvers
