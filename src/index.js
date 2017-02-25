import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'

import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'

import reducers from './reducers'

import App from './components/App'
import Search from './components/Search'
import Results from './components/Results'
import ResultsContainer from './containers/ResultsContainer'
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
        <Route component={App}>
          <Route path="/" component={Search} />
          <Route path="results" component={ResultsContainer}>
            <Route path="/hero/:name" component={Results} />
            <Route path="heroes" component={Heroes} />
            <Route path="units" component={Units} />
          </Route>
        </Route>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  )
})
