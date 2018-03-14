import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <p>You Here</p>
      </div>
    );
  }
}

export default App;
