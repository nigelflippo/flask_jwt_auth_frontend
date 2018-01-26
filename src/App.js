import React, { Component } from 'react';
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
          <Login />
          <Register />
          <Profile />
        </div>
    );
  }
}

export default App;
