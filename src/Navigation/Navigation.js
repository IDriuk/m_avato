import React, { Component } from 'react';
import './Navigation.css';

const SWIPE_LENGTH = 60;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidUpdate() {
    const { show } = this.props;

    if( show ) {
      document.addEventListener('mouseup', this.handleMouseUp);
    } else {
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }

  handleMouseUp(e) {
    const { hide } = this.props
    const nav = document.querySelector('.navigation-drawer-wrapper');

    if (!nav.contains(e.target)) {
      hide();
    }
  }

  handleTouchStart(event) {
    const { clientX: startX } = event.touches[0];
    this.setState({ startX });
  }

  handleTouchMove(event) {
    const { clientX } = event.touches[0];
    const { startX } = this.state;
    const { hide } = this.props;

    if( startX - clientX > SWIPE_LENGTH ) hide();
  }

  render() {

    const { show } = this.props;

    return (
      <div className={`navigation-drawer ${show ? "navigation-drawer-visible" : "" }`}>
        <div
          className="navigation-drawer-wrapper"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >

          <a className="navigation-drawer-header">
            <div className="navigation-drawer-avatar"></div>
            <div className="navigation-drawer-login">Войти или зарегистрироваться</div>
          </a>

          <div className="navigation-drawer-menu">

            <a className="menu-item menu-item-search">Поиск объявлений</a>
            <a className="menu-item menu-item-autosearch">Сохранённые поиски</a>
            <a className="menu-item menu-item-favorites">Избранное</a>
            <a className="menu-item menu-item-profile">Мои объявления</a>
            <a className="menu-item menu-item-messenger">Сообщения</a>

            <div className="menu-item-borders">
              <a className="menu-item menu-item-add">Подать объявление</a>
            </div>

            <a className="menu-item menu-item-settings">Настройки</a>

          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
