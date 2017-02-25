import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftUnitsList from '../components/StarcraftUnitsList'

const Units = gql`
  {
    units {
      name, faction, weapon
      armor, hp, shields
      abilities {
        ability
      }
    }
  }
`

export default graphql(Units)(StarcraftUnitsList)
