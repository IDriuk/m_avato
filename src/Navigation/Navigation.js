import React, { Component } from 'react';
import './Navigation.css';

const SWIPE_LENGTH = 60;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
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

    if (!nav.contains(e.target)) hide();
  }

  handleTouchStart(e) {
    const { clientX: startX } = e.touches[0];
    this.setState({ startX });
  }

  handleTouchMove(e) {
    const { clientX: endX } = e.touches[0];
    this.setState({ endX });
  }

  handleTouchEnd(e) {
    const { startX, endX } = this.state
    const { hide } = this.props;

    if ( startX - endX > SWIPE_LENGTH ) hide();
  }

  render() {

    const { show } = this.props;

    return (
      <div className={`navigation-drawer ${show ? "navigation-drawer-visible" : "" }`}>
        <div
          className="navigation-drawer-wrapper"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
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
