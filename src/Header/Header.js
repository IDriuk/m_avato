import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {

    const { onClick } = this.props;

    return (
      <header className="header">
        <div className="header-float">
          <div
            className="header-menu"
            onClick={onClick}
          >
            <span className="header-menu-icon"></span>
          </div>
          <a className="header-logo">{/* // eslint-disable-line */}</a>
        </div>
      </header>
    );
  }
}

export default Header;
