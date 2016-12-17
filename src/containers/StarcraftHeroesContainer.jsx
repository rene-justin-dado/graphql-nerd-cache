import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Query = gql`
  query Hero {
    hero(name:"Zeratul") {
      id
      name
    }
  }
`

export default graphql(Query)(StarcraftHeroesList)
