import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap'
import {auth} from '../store'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const {email, password} = this.state
    this.props.login(email, password)
    this.props.handleClose()
  }
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>

          <Col sm={10}>
            <FormControl
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>

          <Col sm={10}>
            <FormControl
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={12}>
            <Button bsSize="large" block type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatch = dispatch => ({
  login: (email, password) => dispatch(auth(email, password))
})

export default connect(null, mapDispatch)(Login)
