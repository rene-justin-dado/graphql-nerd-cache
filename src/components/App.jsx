import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'
import StarcraftHeroesContainer from '../containers/StarcraftHeroesContainer'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WordsContainer />
        <AddWord />
        <br/>
        <br/>
        <StarcraftHeroesContainer />
      </div>
    )
  }
})
