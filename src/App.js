import React, { Component } from 'react';
import './App.css';
import FiveDays from './containers/FiveDays/FiveDays';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FiveDays />
      </div>
    );
  }
}

export default App;
