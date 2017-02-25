import React from 'react'
import StarcraftHeroFactions from './StarcraftHeroFactions'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  render () {
    return (this.props.data.loading ? <h3>Loading. Please wait...</h3> :
        <StarcraftHeroFactions data={this.props.data} />
    )
  }
})
