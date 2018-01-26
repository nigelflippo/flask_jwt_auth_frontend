import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import Register from './components/Register'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" render={()=>(
          <Login />
        )} />
        <Route path="/register" render={()=>(
          <Register />
        )} />
        </div>
      </Router>
    );
  }
}

export default App;
