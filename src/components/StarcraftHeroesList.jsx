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

    // const x = d3.scaleOrdinal()
    //             .range([0, width, 0.1])
    //             .domain()
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
    const heroes = this.props.data.heroes
    const unit = this.props.data.unit
    const loading = this.props.data.loading

    // <div>
    //   {loading ? <h1>Loading. Please wait...</h1> :
    //     <div className="data">
    //       <h1>{heroes.name}</h1>
    //       <p>{heroes.race}</p>
    //
    //       <h1>{unit.name}</h1>
    //       <ul>
    //         <li>{unit.race}</li>
    //         <li>{unit.weapon}</li>
    //         <li>{unit.armor}</li>
    //       </ul>
    //     </div>}
    //   </div>
    return (
      <svg className="chart">{loading ? <h1>Loading. Please wait...</h1> : this.d3()}</svg>
    )
  }
})
