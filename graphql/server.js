import express from 'express'
import {apolloExpress, graphiqlExpress} from 'apollo-server'
import {makeExecutableSchema} from 'graphql-tools'
import bodyParser from 'body-parser'
import cors from 'cors'
import Schema from './data/schema'
import Resolvers from './data/resolvers'

const GRAPHQL_PORT = 3000

const graphQLServer = express()

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: false,
  printErrors: true
})

graphQLServer.use(express.static(`${__dirname}/../public`))
graphQLServer.use(cors())

graphQLServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {}
}))

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
))
