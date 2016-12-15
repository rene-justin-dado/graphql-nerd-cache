import React, {PropTypes} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import Word from './Word'

const Data = graphql(Zeratul)()
const Zeratul = gql`
query Zeratul {
  hero(name:"Zeratul") {
    id
    name
    race
  }
}
`

const Words = ({words}) => (
  <div>
    {words.map(word =>
      <Word
        key={word.id}
        {...word}
        />
    )}
  </div>
)

Words.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      word: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Words
