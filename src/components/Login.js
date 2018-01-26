import React, { Component } from 'react'
// import {
//   Link
// } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
      message: ''
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
      token: logged.auth_token,
      message: logged.message
    })
    localStorage.setItem('token', logged.auth_token)
  }
  logout = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:5000/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    localStorage.removeItem('token')
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
            <h3>Login</h3>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}>
              </input>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            </div>
          </div>
          <div>
            <button type="submit" value="Send">Submit</button>
          </div>
        </form>
        <div>
          <button onClick={(e)=>{this.logout(e)}}>Logout</button>
        </div>
        <span style={{fontSize:10}}>{this.state.message}</span>
      </div>
    )
  }
}

export default Login
