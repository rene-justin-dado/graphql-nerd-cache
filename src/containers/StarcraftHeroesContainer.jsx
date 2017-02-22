import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Heroes = gql`
  query Heroes {
    heroes {
      name
      race
      charValue
    }
  }
`

export default graphql(Heroes)(StarcraftHeroesList)
