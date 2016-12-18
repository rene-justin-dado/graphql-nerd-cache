import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'

import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

import reducers from './reducers'

import App from './components/App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:3000/graphiql/'})
})
let store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ApolloProvider store={store} client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app')
  )
})
