import React from 'react'
import HeroByName from './HeroByName'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  render () {
    return React.cloneElement(this.props.children, {data: this.props.data})
  }
})
