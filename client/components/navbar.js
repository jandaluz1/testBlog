import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Navb = ({handleClick, isLoggedIn}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">My Blog</a>
      </Navbar.Brand>
    </Navbar.Header>
    {isLoggedIn ? (
      <Nav>
        <NavItem href="#home">Home</NavItem>
        <NavItem pullright onClick={handleClick}>
          Logout
        </NavItem>
      </Nav>
    ) : (
      <Nav>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/signup">Sign Up</NavItem>
      </Nav>
    )}
  </Navbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navb)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
