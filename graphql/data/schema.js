const typeDefinitions = `
# An Epic hero from the Starcraft universe.
type Hero {
  id: Int
  # A hero's name or alias.
  name: String!
  race: String
}
# A combat unit from the tumultuous Koprulu sector.
type Unit {
  id: Int
  name: String!
  race: String
  weapon: String
  armor: String
  abilities: [Abilities]
}
# A unit's or hero's special abilities in-game.
type Abilities {
  id: Int!
  ability: String!
}

# You can search Heroes and Units:
type Query {
  hero(name: String): Hero
  unit(name: String): Unit
  heroes: [Hero]
}
schema {
  query: Query
}
`
export default [typeDefinitions]
