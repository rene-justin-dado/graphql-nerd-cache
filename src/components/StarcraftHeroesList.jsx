import React from 'react'
import { Link } from 'react-router'
import * as d3 from 'd3'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  d3 () {
    // data
    const heroes = this.props.data.heroes
    // init values
    const height = 360,
      width = 360,
      radius = Math.min(height, width) / 2,
      color = d3.scaleOrdinal(d3.schemeCategory20b)

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    const labelArc = d3.arc()
      .outerRadius(radius - 80)
      .innerRadius(radius - 80)
    const pie = d3.pie()
      .value((d) => d.charValue)
      .sort(null)

    const svg = d3.select('.heroesChart')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', `translate(${width/2}, ${height/2})`)
                  .selectAll('.slice')
                  .data(pie(heroes))
                    .enter().append('g')
                  .attr('class', 'slice')

    const path = svg.append('path')
                    .attr('d', arc)
                    .attr('fill', (d) => color(d.data.name))
    const text = svg.append('text')
                    .attr('transform', (d) => `translate(${labelArc.centroid(d)})`)
                    .attr('textLength', 80)
                    .attr('lengthAdjust', 'spacing')
                    .attr('dy', '.75em')
                    .text(d => d.data.name)
  },
  render () {
    const loading = this.props.data.loading
    return (
      <div className="heroesChart">
        <nav><Link to='/'>Home</Link></nav>
        {loading ? <h1>Loading. Please wait...</h1> : <h3>Hero Value to Narrative</h3>}
        {loading ? <h1>Loading. Please wait...</h1> : this.d3()}
      </div>
    )
  }
})
