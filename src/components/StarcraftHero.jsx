import React from 'react'
import * as d3 from 'd3'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  d3 () {

  },
  render () {
    console.log(this.props.data)
    return (this.props.data.loading ? <h3>Loading. Please wait...</h3> :
      <div>Hello</div>
    )
  }
})
