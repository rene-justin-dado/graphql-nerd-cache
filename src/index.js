import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'

import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

import reducers from './reducers'

import App from './components/App'
import Home from './components/Home'
import Heroes from './containers/StarcraftHeroesContainer'
import Units from './containers/StarcraftUnitsContainer'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:3000/graphql'})
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
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/heroes" component={Heroes} />
          <Route path="/units" component={Units} />
        </Route>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  )
})
