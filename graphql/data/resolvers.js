import { Hero, Heroes, Unit, Units } from './connectors'

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
    },
    units() {
      return Units()
    }
  }
}

export default resolvers
