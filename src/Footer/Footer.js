import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a className="footer-link">Помощь</a>
          <a className="footer-link">Безопасность</a>
          <a className="footer-link">Реклама на сайте</a>
        </div>

        <div className="footer-links">
          <a className="footer-link">О компании</a>
          <a className="footer-link">Вакансии</a>
        </div>

        <div className="footer-links footer-links_level">
          <a className="footer-link">Пользовательское соглашение</a>
          <a className="footer-link">Оферта</a>
          <a className="footer-link">О cookies</a>
        </div>

        <div className="footer-logo"></div>

        <div className="footer-links">
          <a className="footer-links-link">Полная версия</a>
        </div>

        <div className="footer-copyright">© Avito, 2018</div>
      </footer>
    );
  }
}

export default Footer;
