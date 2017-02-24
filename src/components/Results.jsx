import React from 'react'
import StarcraftHero from './StarcraftHero'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  render () {
    return (this.props.data.loading ? <h3>Loading. Please wait...</h3> :
      this.props.data.hero ?
        <StarcraftHero data={this.props.data} /> :
        <h1>Nope</h1>
    )
  }
})
