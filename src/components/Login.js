import React, { Component } from 'react'
import {
  TextField,
  RaisedButton
} from 'material-ui'
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
    if (logged.auth_token) {
      this.setState({
        token: logged.auth_token,
        message: logged.message
      })
      localStorage.setItem('token', logged.auth_token)
    } else {
      this.setState({
        message: logged.message
      })
    }
  }
  logout = async (e) => {
    e.preventDefault()
    const r = await fetch(`http://localhost:5000/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const logged = await r.json()
    this.setState({
      token: logged.auth_token,
      message: logged.message
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
      <div className="container">
        <form className="form-field" onSubmit={(e)=>{this.loginUser(e, this.state)}}>
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <label>Email</label>
            <div>
              <TextField type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <TextField type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <RaisedButton type="submit" value="Send" label="Login" style={{margin:6}}/>
          </div>
          <div>
            <RaisedButton onClick={(e)=>{this.logout(e)}} label="Logout" style={{margin:6}}/>
          </div>
          <span style={{fontSize:16, margin:6}}>{this.state.message}</span>
        </form>
      </div>
    )
  }
}

export default Login
