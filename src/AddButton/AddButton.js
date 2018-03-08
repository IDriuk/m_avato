import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  render() {
    return (
      <a className="floating-add-button floating-add-button-visible">
        <div className="floating-add-button-container">
          <span className="floating-add-button-text">Подать объявление</span>
        </div>
      </a>
    );
  }
}

export default AddButton;
