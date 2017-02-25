import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState () {
    return {
      searchQuery: '',
      byName: true,
      byKeywords: false,
      byDescription: false,
      byStarcraft: false,
      byWarcraft: false
    }
  },
  handleSubmit (evt) {
    evt.preventDefault()
    const path = `/results/${this.state.searchQuery}/hero`
    console.log(evt.target.elements[0].value)
  },
  render () {
    const searchParams = this.state
    return (
      <div className='search container-fluid'>
        <div className='row'>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Search By Category:</h3></a>
                {/*Category dropdown*/}
                <select name='category-search'
                        form='search'
                        defaultValue='Any'
                        className='dropdown-menu'
                        onClick={(evt) => evt.target.parentNode.lastChild.innerHTML = evt.target.value || evt.target.defaultValue}>
                  <option>Any</option>
                  <option>Name</option>
                  <option>Keywords</option>
                  <option>Description</option>
                </select>
                <div></div>
              </div>
            </div>
          </nav>
          <nav className='navbar col-xs-12 col-md-6'>
            <div className='container-fluid'>
              <div className='dropdown col-xs-4 col-xs-offset-4'>
                <a className='dropdown-toggle nav-link' data-toggle='dropdown'><h3>Search By Universe:</h3></a>
                <select name='universe-search'
                        form='search'
                        defaultValue='Any'
                        className='dropdown-menu'
                        onClick={(evt) => evt.target.parentNode.lastChild.innerHTML = evt.target.value || evt.target.defaultValue}>
                  <option>Any</option>
                  <option>Starcraft</option>
                  <option>Warcraft</option>
                </select>
                <div></div>
              </div>
            </div>
          </nav>
          <form action='localhost:8080/'
                id='search'
                onSubmit={this.handleSubmit}
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
              <button name='search-submit'
                      type='submit'
                      form='search'
                      className='form-control'>search
                </button>
            </fieldset>
          </form>
        </div>
        {this.props.children}
      </div>
    )
  }
})
