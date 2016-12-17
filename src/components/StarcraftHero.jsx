import React, {PropTypes} from 'react'

const StarcraftHero = ({hero}) => (
  <div>{hero}</div>
)

StarcraftHero.propTypes = {
  hero: PropTypes.string.isRequired
}

export default StarcraftHero
