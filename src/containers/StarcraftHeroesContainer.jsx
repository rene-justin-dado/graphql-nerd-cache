import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftHeroesList from '../components/StarcraftHeroesList'

const Generic = gql`
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
const Heroes = gql`
  query Heroes {
    heroes {
      name
      race
    }
  }
`

// export default genericQuery = graphql(Generic)(StarcraftHeroesList)
export default graphql(Heroes)(StarcraftHeroesList)
