import React from 'react'
import { Link } from 'react-router'
import Search from './Search'

export default React.createClass({
  render () {
    return (
      <div className="home row">
        <h1 className='col-xs-6 col-xs-offset-3'>Come and see what there is to see.</h1>
        <Search />
      </div>
    )
  }
})
