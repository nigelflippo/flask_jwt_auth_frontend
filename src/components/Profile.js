import React, { Component } from 'react'
import {RaisedButton} from 'material-ui'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      email: '',
      admin: '',
      registered_on: ''
    }
  }
  displayUser = async () => {
    const user = await this.getUser()
    this.setState({
      user_id: user.data.user_id,
      email: user.data.email,
      admin: user.data.admin,
      registered_on: user.data.registered_on
    })
  }
  async getUser() {
    const response = await fetch(`http://localhost:5000/auth/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    const json = await response.json()
    if (json.message) {
      return {
        data: {
          user_id: 'N/A',
          email: 'N/A',
          admin: 'N/A',
          registered_on: 'N/A'
        }
      }
    }
    return json
  }
  render() {
    return (
      <div className="container">
        <div className="form-field">

          <RaisedButton onClick={this.displayUser} label="Display Current User" style={{margin:6}}/>
          <div>{this.state.user_id}</div>
          <div>{this.state.email}</div>
          <div>{this.state.admin}</div>
          <div>{this.state.registered_on}</div>
        </div>
      </div>
    )
  }
}

export default Profile
