import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='search container-fluid'>
        <div className='row'>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Category</h3></a>
                <ul className='dropdown-menu'>
                  <li>Name</li>
                  <li>Keywords</li>
                  <li>Description</li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Universe</h3></a>
                <ul className='dropdown-menu'>
                  <li>Starcraft</li>
                  <li>Warcraft</li>
                </ul>
              </div>
            </div>
          </nav>
          <form action='localhost:3000/graphql'
                className='form-horizontal col-xs-10 col-xs-offset-1'
                method='post'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='search-bar'>Search:</label>
              <input id='search-bar' className='form-control' type='text'/>
              <button className='form-control'>search</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
})
