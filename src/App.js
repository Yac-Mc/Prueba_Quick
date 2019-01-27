import React, { Component } from 'react';
import './App.css';

// import axios from 'axios';
// import Select from 'react-select';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <div>
        <Movies></Movies>
      </div>
    );
  }
}

export default App;
