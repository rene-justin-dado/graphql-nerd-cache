import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Query = gql`
  query Hero {
    hero(name:"Kerrigan") {
      id
      name
      race
    }
  }
`

export default graphql(Query)(StarcraftHeroesList)
