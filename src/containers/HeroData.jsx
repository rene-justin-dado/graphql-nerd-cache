import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import Results from '../components/Results'

const Hero = gql`
  query Hero ($id:Int $name:String) {
    hero(id: $id name: $name) {
      id, name
      race, charValue
    }
  }
`
export default graphql(Hero, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.id,
      name: ownProps.params.name
    }
  })
})(Results)
