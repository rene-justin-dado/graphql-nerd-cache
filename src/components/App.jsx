import React from 'react'

import StarcraftHeroesContainer from '../containers/StarcraftHeroesContainer'
import StarcraftUnitsContainer from '../containers/StarcraftUnitsContainer'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <StarcraftHeroesContainer />
        <StarcraftUnitsContainer />
      </div>
    )
  }
})
