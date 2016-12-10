const typeDefinitions = `
type Hero {
  id: Int!
  name: String!
  race: String
  Affiliations: String
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
type Race {
  name: String!
}

type Query {
  hero(name: String): Hero
  Unit(name: String): Unit
}
schema {
  query: Query
}
`

export default [typeDefinitions]
