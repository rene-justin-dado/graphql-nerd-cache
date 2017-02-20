import React from 'react'
import * as d3 from 'd3'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  d3 () {
    let heroValues = []
    const heroes = this.props.data.units
    heroes.forEach((val) => heroValues.push(val.hp))
    const height = 200,
      width = 1000,
      barWidth = 80

    const y = d3.scaleLinear()
                .domain([0, d3.max(heroValues)])
                .range([200, 0])
    const unitsChart = d3.select('.unitsChart')
                         .append('svg')
                         .attr('width', width)
                         .attr('height', height)

    const bar = unitsChart.selectAll('g')
                          .data(heroes)
                         .enter().append('g')
                          .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)

    bar.append("rect")
     .attr('y', (d) => y(d.hp))
     .attr("width", barWidth - 1)
     .attr("height", (d) => height - y(d.hp))

    bar.append("text")
       .attr("x", barWidth / 6)
       .attr("y",  (d) => y(d.hp) + 5)
       .attr("dy", ".75em")
       .text((d) => d.name)
  },
  render () {
    const loading = this.props.data.loading
    return (
      <div className="unitsChart">
        {loading ? null : <h3>Units HP</h3>}
        {loading ? <h1>Loading. Please wait...</h1> : this.d3()}
      </div>
    )
  }
})
