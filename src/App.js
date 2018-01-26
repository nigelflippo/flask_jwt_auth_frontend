import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom'

import './App.css';

import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'



class App extends Component {
  render() {
    return (
        <div className="App">
          <MuiThemeProvider>
            <Login />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <Register />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <Profile />
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
