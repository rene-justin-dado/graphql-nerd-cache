import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },
  render () {
    const hero = this.props.data.hero
    const loading = this.props.data.loading

    return (
      <div>
        {loading ? <h1>Loading. Please wait...</h1> :
          <div>
            <h1>{hero.name}</h1>
            <p>{hero.race}</p>

            <h1>{unit.name}</h1>
            <ul>
              <li>{unit.race}</li>
              <li>{unit.weapon}</li>
              <li>{unit.armor}</li>
            </ul>
          </div>}
      </div>
    )
  }
})
