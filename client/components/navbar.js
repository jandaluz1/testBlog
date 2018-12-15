import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Login} from './index'
import {Navbar, Nav, NavItem, Modal} from 'react-bootstrap'

class Navb extends Component {
  constructor() {
    super()
    this.state = {showModal: false}
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleShow() {
    this.setState({showModal: true})
  }
  handleClose() {
    this.setState({showModal: false})
  }
  render() {
    const {handleClick, isLoggedIn} = this.props
    return (
      <React.Fragment>
        <Navbar bsStyle="inverse" bsSize="small">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">My Blog</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {isLoggedIn ? (
              <Nav pullRight>
                <NavItem href="/home">Home</NavItem>
                <NavItem onClick={handleClick}>Logout</NavItem>
              </Nav>
            ) : (
              <Nav pullRight>
                <NavItem onClick={this.handleShow}>Login</NavItem>
                <NavItem href="/signup">Sign Up</NavItem>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        <Modal show={this.state.showModal} onHide={this.handleClose} keyboard>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login handleClose={this.handleClose} />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

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
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
