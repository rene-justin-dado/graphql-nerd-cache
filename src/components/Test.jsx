import React from 'react'

export default React.createClass({
  render () {
    console.log(this.props.params)
    return (
      <h1>Hello</h1>
    )
  }
})
