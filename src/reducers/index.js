import {combineReducers} from 'redux'
import ApolloClient from 'apollo-client'

const client = new ApolloClient()
export default combineReducers({
  apollo: client.reducer()
})
