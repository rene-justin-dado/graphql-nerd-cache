import { Hero, Heroes, Unit, Units } from './connectors'

const resolvers = {
  Query: {
    hero(_, args) {
      return Hero(args.id || null, args.name)
    },
    unit(_, args) {
      return Unit(args.name)
    },
    heroes(_, args) {
      return Heroes(args.faction)
    },
    units() {
      return Units()
    }
  }
}

export default resolvers
