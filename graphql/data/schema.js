const typeDefinitions = `
type Hero {
  id: Int!
  name: String!
  Affiliations: [Groups]
}
type Unit {
  id: Int!
  name: String!
  race: String
  weapon: String
  armor: String
  abilities: [Abilities]
}
type Abilities {
  id: Int!
  name: String!
}
type Groups {
  name: String!
  race: String
}

# the schema allows the following query:
type Query {
  hero(name: String): Hero
  Unit(name: String): Unit
}
schema {
  query: Query
}
`

export default [typeDefinitions]
