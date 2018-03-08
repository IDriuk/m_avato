import React, { Component } from 'react';
import './Locations.css';

import locationsList from './locationsList';

class Locations extends Component {
  renderItem(item, index) {
    return (
      <li key={index} className="list-item">
        <a className="list-link">{item}</a>
      </li>
    );
  }

  render() {
    return (
      <section className="b-content-main">
        <article className="b-list">
          <ul className="list">
            {locationsList.map((item, index) => this.renderItem(item, index))}
          </ul>
        </article>
      </section>
    );
  }
}

export default Locations;
