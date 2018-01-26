import React, { Component } from 'react'
import {
  TextField,
  RaisedButton
} from 'material-ui'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  createUser = async ({email, password}) => {
    await fetch(`http://localhost:5000/auth/register`, {
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
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <form className="form-field" onSubmit={()=>{this.createUser(this.state)}}>
          <div>
            <h2>Register New User</h2>
          </div>
          <div>
            <label>Email</label>
            <div>
              <TextField type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <TextField type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <RaisedButton type="submit" value="Send" label="Register" style={{margin:6}}/>
          </div>
        </form>
        <br/>
      </div>
    )
  }
}

export default Register
