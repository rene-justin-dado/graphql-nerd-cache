import React from 'react'
import * as d3 from 'd3'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  d3 () {
    const Protoss = this.props.data.Protoss
    const Terran = this.props.data.Terran
    const Zerg = this.props.data.Zerg
    // console.log([].concat(Protoss, Terran, Zerg))
  },
  render () {
    const loading = this.props.data.loading
    return (
      <div className="heroFactionsChart">
        {loading ? <h3>Loading. Please wait...</h3> :
        this.d3()}
      </div>
    )
  }
})
