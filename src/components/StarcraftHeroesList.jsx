import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },
  render () {
    const hero = this.props.data.hero
    const unit = this.props.data.unit
    const loading = this.props.data.loading

    return (
      <div>
        {loading ? <h1>Loading. Please wait...</h1> :
          <div>
            <h1>Hero</h1>
            <h2>{hero.name}</h2>
            <p>{hero.race}</p>
            <br/>
            <br/>
            <br/>
            <h1>Unit</h1>
            <h2>{unit.name}</h2>
            <p>{unit.race}</p>
            <p>{unit.armor}</p>
            <p>{unit.weapon}</p>
          </div>}
      </div>
    )
  }
})
