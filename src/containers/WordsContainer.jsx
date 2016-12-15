import {connect} from 'react-redux'

import WordsWithData from '../components/Words'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(
  mapStateToProps
)(WordsWithData)
