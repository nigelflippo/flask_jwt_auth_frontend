import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }
  }
  loginUser = async (e, {email, password}) => {
    e.preventDefault()
    const r = await fetch(`http://localhost:5000/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const logged = await r.json()
    this.setState({
      token: logged.auth_token
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.loginUser(e, this.state)}}>
          <div>
            <h4>Most Insecure Login: {this.state.token}</h4>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}>
            </input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          </div>
          <div>
            <button type="submit" value="Send">Submit</button>
          </div>
        </form>
        <Link to="/register">
          <div>
            <button>Register New User</button>
          </div>
        </Link>
      </div>
    )
  }
}

export default Login
