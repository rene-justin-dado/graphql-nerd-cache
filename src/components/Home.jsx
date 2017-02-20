import React from 'react'
import { Link } from 'react-router'

const Home = React.createClass({
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='heroes'>Heroes</Link>
          </li>
          <li>
            <Link to='units'>Units</Link>
          </li>
        </ul>
        <h1>Hello</h1>
      </div>
    )
  }
})

export default Home
