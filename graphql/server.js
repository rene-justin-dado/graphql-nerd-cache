import express from 'express'
import { apolloExpress, grapiqlExpress } from 'apollo-server'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import bodyParser from 'body-parser'
import Schema from './data/schema'
import Resolvers from './data/resolvers'

const GRAPHQL_PORT = 2876

const graphQLServer = express()

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: false,
  printErrors: true
})

graphQLServer.use('/graphql', bodyParse.json(), apolloExpress({
  schema: executableSchema,
  context: {}
}))

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
))
