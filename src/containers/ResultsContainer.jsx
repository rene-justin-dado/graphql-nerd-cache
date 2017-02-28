import React from 'react'
import PropsDelegate from '../components/PropsDelegate'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

const HeroFactions = gql`
  query HeroFactions {
    Protoss: heroes(faction: "Protoss") {
      id, name
      faction, charValue
    }
    Terran: heroes(faction: "Terran") {
      id, name
      faction, charValue
    }
    Zerg: heroes(faction: "Zerg") {
      id, name
      faction, charValue
    }
  }
`

export default graphql(HeroFactions)(PropsDelegate)
