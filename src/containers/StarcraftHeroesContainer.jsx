import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Query = gql`
  query HeroAndUnit {
    hero(name:"Zeratul") {
      id
      name
      race
    }
    unit(name:"SCV") {
      id
      name
      race
      weapon
    }
  }
`

export default graphql(Query)(StarcraftHeroesList)
