const typeDefinitions = `
# An Epic hero from the Starcraft universe.
type Hero {
  id: Int!
  # A hero's name or alias.
  name: String!
  race: String
  charValue: Int
}
# A combat unit from the tumultuous Koprulu sector.
type Unit {
  id: Int
  name: String!
  race: String
  weapon: String
  armor: String
  hp: Int
  # Protoss shields are unique to protoss unit entries
  shields: Int
  abilities: [Abilities]
}
# A unit's or hero's special abilities in-game.
type Abilities {
  id: Int!
  ability: String
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
