import React, {PropTypes} from 'react'
import * as d3 from 'd3'

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },
  d3 () {
    let heroValues = []
    const heroes = this.props.data.heroes
    heroes.forEach((val) => heroValues.push(val.charValue))
    const height = 200,
      width = 1000,
      barWidth = 80

    const y = d3.scaleLinear()
                .domain([0, d3.max(heroValues)])
                .range([200, 0])
    const chart = d3.select('.chart')
                    .attr('width', width)
                    .attr('height', height)
    chart.append("title")
      .html("Narrative Significance of Starcraft Characters")
    const bar = chart.selectAll('g')
                       .data(heroes)
                     .enter().append('g')
                       .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`)
    bar.append("rect")
     .attr('y', (d) => y(d.charValue))
     .attr("width", barWidth - 1)
     .attr("height", (d) => height - y(d.charValue))

    bar.append("text")
       .attr("x", barWidth / 6)
       .attr("y",  (d) => y(d.charValue) + 5)
       .attr("dy", ".75em")
       .text((d) => d.name)
  },
  render () {
    const loading = this.props.data.loading
    return (
      <svg className="chart">{loading ? <h1>Loading. Please wait...</h1> : this.d3()}</svg>
    )
  }
})
