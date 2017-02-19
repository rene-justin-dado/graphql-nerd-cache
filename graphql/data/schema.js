const typeDefinitions = `
# An Epic hero from the Starcraft universe.
type Hero {
  id: Int!
  # A hero's name or alias.
  name: String!
  race: String
  # A hero's value to the narrative.
  charValue: Int
}
# A combat unit from the tumultuous Koprulu sector.
type Unit {
  id: Int
  name: String!
  race: String
  # A unit's armament
  weapon: String
  # A unit's means of protection
  armor: String
  # In-Game Health
  hp: Int
  # Protoss shields are unique to protoss unit entries
  shields: Int
  # In-Game abilities
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
  units: [Unit]
}
schema {
  query: Query
}
`
export default [typeDefinitions]
