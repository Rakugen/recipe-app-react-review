import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'

class Header extends React.Component {
  state = {
    filter: ''
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })
    this.props.changeFilter(e.target.value)
  }

  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
          <input
            type='text'
            value={this.state.filter}
            onChange={this.handleChange}
            />
        </div>
      </Fragment>
    )
  }

}

export default Header
