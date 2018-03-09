import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

  componentDidUpdate() {
    const { show, hide } = this.props;

    const listener = (e) => {
      const nav = document.querySelector('.navigation-drawer-wrapper');

      if (!nav.contains(e.target)) {
        hide();
      }
    }

    if( show ) {
      document.addEventListener('mouseup', listener);
    } else {
      document.removeEventListener('mouseup', listener);
    }
  }

  render() {

    const { show } = this.props;

    return (
      <div className={`navigation-drawer ${show ? "navigation-drawer-visible" : "" }`}>
        <div className="navigation-drawer-wrapper">

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
