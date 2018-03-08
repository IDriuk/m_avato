import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false, offset: 0, showDiff: 100 };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ show: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { show, offset, showDiff } = this.state;
    const pageOffset= window.pageYOffset;

    const scrollDown = pageOffset - offset > showDiff ? true : false;
    const scrollTop = offset - pageOffset > showDiff ? true : false;

    this.setState({
      show: (scrollTop ? true : scrollDown ? false : show),
      offset: (scrollDown || scrollTop ? pageOffset : offset)
    });
  }

  render() {
    const { show } = this.state;

    return (
      <a className={`floating-add-button ${show ? "floating-add-button-visible" : ""}`}>
        <div className="floating-add-button-container">
          <span className="floating-add-button-text">Подать объявление</span>
        </div>
      </a>
    );
  }
}

export default AddButton;
