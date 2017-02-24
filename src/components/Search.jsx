import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return { searchQuery: '' }
  },
  render () {
    const idHandler = /\d/.test(this.state.searchQuery) ? this.state.searchQuery : ' '
    const nameHandler = idHandler === ' ' ? this.state.searchQuery : 'name'
    return (
      <div className='search container-fluid'>
        <div className='row'>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Category</h3></a>
                <ul className='dropdown-menu'>
                  <li><a>Name</a></li>
                  <li><a>Keywords</a></li>
                  <li><a>Description</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Universe</h3></a>
                <ul className='dropdown-menu'>
                  <li><a>Starcraft</a></li>
                  <li><a>Warcraft</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <form action='localhost:8080/'
                id='search'
                className='form-horizontal col-xs-10 col-xs-offset-1'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='search-bar'>Search:</label>
              <input
                id='search-bar'
                name='query'
                defaultValue=''
                onChange={evt => this.setState({searchQuery: evt.target.value})}
                className='form-control'
                type='text'/>
              <Link to={`/results/${idHandler}/${nameHandler}`}>
                <button name='search-submit'
                      form='search'
                      className='form-control'>search
                </button>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
})
