import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Locations from '../Locations/Locations';
import Footer from '../Footer/Footer';
import AddButton from '../AddButton/AddButton';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { navigation: false };

    this.showNavigation = this.showNavigation.bind(this);
    this.hideNavigation = this.hideNavigation.bind(this);
  }

  showNavigation() {
    document.body.classList.add("show-navigation-drawer");
    this.setState({ navigation: true });
  }

  hideNavigation() {
    document.body.classList.remove("show-navigation-drawer");
    this.setState({ navigation: false });
  }

  render() {
    const { navigation } = this.state;
    return (
      <div className="app">
        <Header
          onClick={this.showNavigation}
        />
        <AddButton />
        <Navigation
          show={navigation}
          hide={this.hideNavigation}
        />
        <Locations />
        <Footer />
      </div>
    );
  }
}

export default App;
