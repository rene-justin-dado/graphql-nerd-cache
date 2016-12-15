import {connect} from 'react-redux'

import Words from '../components/Words'
const MyQuery = gql`query {hero(name:"Zeratul"){name}}`
const Heroes = graphql(MyQuery)
const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(
  mapStateToProps
)(Words)
