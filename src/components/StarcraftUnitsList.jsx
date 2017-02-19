import React from 'react'
import * as d3 from 'd3'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  d3 () {

  },
  render () {
    const loading = this.props.data.loading
    return (
      <svg className="chart">{loading ? <h1>Loading. Please wait...</h1> : this.d3()}</svg>
    )
  }
})
