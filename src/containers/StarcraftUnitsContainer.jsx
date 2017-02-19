import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftUnitsList from '../components/StarcraftUnitsList'

const Units = gql`
  query Units {
    units {
      name, race
      weapon, armor, hp, shields
      abilities {
        ability
      }
    }
  }
`

export default graphql(Units)(StarcraftUnitsList)
