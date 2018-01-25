import React, { Component } from 'react'

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
      <div>
        <form onSubmit={()=>{this.createUser(this.state)}}>
          <div>
            <h4>Register New User</h4>
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
      </div>
    )
  }
}

export default Register
