import {combineReducers} from 'redux'
import ApolloClient from 'apollo-client'

import words from './words'

const client = new ApolloClient()
export default combineReducers({
  words,
  apollo: client.reducer()
})
