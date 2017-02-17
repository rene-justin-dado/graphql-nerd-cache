const typeDefinitions = `
# An Epic hero from the Starcraft universe.
type Hero {
  id: ID!
  # A hero's name or alias.
  name: String!
  race: String
  charValue: Int
}
# A combat unit from the tumultuous Koprulu sector.
type Unit {
  id: ID!
  name: String!
  race: String
  weapon: String
  armor: String
  abilities: [Abilities]
}
# A unit's or hero's special abilities in-game.
type Abilities {
  id: ID!
  ability: String!
}

# You can search Heroes and Units:
type Query {
  hero(id: Int, name: String): Hero
  unit(name: String): Unit
  heroes: [Hero]
}
schema {
  query: Query
}
`
export default [typeDefinitions]
