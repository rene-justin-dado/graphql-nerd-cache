import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import Search from '../components/Search'

const searchQuery = gql`
  {
    units {
      name, race
      weapon, armor, hp, shields
      abilities {
        ability
      }
    }
  }
`
export default graphql(searchQuery)(Search)
