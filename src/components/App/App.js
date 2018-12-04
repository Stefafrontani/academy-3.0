import React, { Component } from 'react';
import Location from '../Location/Location.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Location />
      </div>
    );
  }
}

export default App;
