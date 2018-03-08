import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Locations from '../Locations/Locations';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Locations />
      </div>
    );
  }
}

export default App;
