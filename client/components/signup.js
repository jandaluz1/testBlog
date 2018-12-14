import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signup} from '../store'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', name: '', password: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const {name, email, password} = this.state
    this.props.signup(name, email, password)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  signup: (name, email, password) => dispatch(signup(name, email, password))
})

export default connect(null, mapDispatch)(Signup)
