import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Query = gql`
  query Hero {
    hero(name:"Kerrigan") {
      name
      race
    }
    unit(name:"SCV") {
      name
      race
      weapon
      armor
    }
  }
`

export default graphql(Query)(StarcraftHeroesList)
