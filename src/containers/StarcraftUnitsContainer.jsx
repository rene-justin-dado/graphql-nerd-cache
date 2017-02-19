import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import StarcraftUnitsList from '../components/StarcraftUnitsList'

const units = ["SCV", "Probe", "Drone"]
const Units = gql`
  query Units {
    scv: unit(name:${units[0]}) {
      name, race
      weapon, armor, hp, shields
      abilities {
        ability
      }
    }
    probe: unit(name:${units[1]}) {
      name, race
      weapon, armor, hp, shields
      abilities {
        ability
      }
    }
    drone: unit(name:${units[2]}) {
      name, race
      weapon, armor, hp, shields
      abilities {
        ability
      }
    }
  }
`

export default graphql(Units)(StarcraftUnitsList)
