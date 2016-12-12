const typeDefinitions = `
type Hero {
  id: Int!
  name: String!
  race: [Race]
}
type Unit {
  id: Int!
  name: String!
  race: [Race]
  weapon: String
  armor: String
  abilities: [Abilities]
}
type Abilities {
  id: Int!
  name: String!
}
type Race {
  name: String!
  race: String
}

# the schema allows the following query:
type Query {
  hero(name: String): Hero
  unit(name: String): Unit
}
schema {
  query: Query
}
`

export default [typeDefinitions]
