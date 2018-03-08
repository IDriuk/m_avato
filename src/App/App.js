import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Locations from '../Locations/Locations';
import Footer from '../Footer/Footer';
import AddButton from '../AddButton/AddButton';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AddButton />
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default App;
