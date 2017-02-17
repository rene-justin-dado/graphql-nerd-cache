import { Hero, Heroes, Unit } from './connectors'

const resolvers = {
  Query: {
    hero(_, args) {
      return Hero(args.id || null, args.name)
    },
    unit(_, args) {
      return Unit(args.name)
    },
    heroes() {
      return Heroes()
    }
  }
}

export default resolvers
