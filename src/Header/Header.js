import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-float">
          <div className="header-menu">
            <span className="header-menu-icon"></span>
          </div>
          <a className="header-logo"></a>
        </div>
      </header>
    );
  }
}

export default Header;
