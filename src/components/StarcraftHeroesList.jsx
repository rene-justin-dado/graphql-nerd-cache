import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },
  render () {
    const hero = this.props.data.hero
    const loading = this.props.data.loading
    console.log(this.props.data)
    return (
      <div>
        {loading ?
          <h1>Loading. Please wait...</h1> :
          <h1>{hero.name}</h1>}
      </div>
    )
  }
})
