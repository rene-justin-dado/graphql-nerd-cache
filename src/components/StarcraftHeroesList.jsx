import React, {PropTypes} from 'react'

export default React.createClass({
  props: {
    data: PropTypes.object.isRequired
  },
  render () {
    return (
      <div>
        {this.props.data.id}
        {this.props.data.name}
      </div>
    )
  }
})
