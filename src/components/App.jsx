import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
})
