import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },
  d3 () {
    const heroes = this.props.data.heroes
    const width = 420,
          barHeight = 20
    console.log(heroes)
    const x = d3.scaleLinear()
                .domain([0, 30])
                .range([0, width])
    const chart = d3.select('.data')
                    .attr('width', width)
                    .attr('height', barHeight * heroes.length)
    const bar = chart.selectAll('g')
                       .data(heroes)
                     .enter().append('g')
                       .attr('transform', (d, i) => `translate(0, ${i * barHeight})`)
   bar.append("rect")
     .attr("width", x)
     .attr("height", barHeight - 1)

   bar.append("text")
       .attr("x", (d) => x(d) - 3)
       .attr("y", barHeight / 2)
       .attr("dy", ".35em")
       .text((d) => d.name + ' ' + d.race)

    // d3.select('.data')
    //     .data(heroes)
    //   .enter().append('div')
  },
  render () {
    console.log(this.props.data)
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
      <svg className="data">{loading ? <h1>Loading. Please wait...</h1> : this.d3()}</svg>
    )
  }
})
