import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MUSICIAN FINDER YEAH!</h1>
        <UserInput />
      </div>
    );
  }
}

export default App;
