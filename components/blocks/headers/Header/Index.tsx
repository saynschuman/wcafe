import React from 'react';
import Link from "next/link";
import Nav from "../Nav"

const Header = () => {
  return (
    <div>
      <div className="header-menu-toggle">
        <i className="menu-icon" />Меню
      </div>
      <div className="top-section main-page">
        <div className="wrapper-overlay">
          <div className="overlay-effect" />
          <header className="header wrapper">
            <div className="header-left-section">
              <div className="header-logo">
                <Link href={"/"}>
                  <a className="header-logo-link">
                    <img src="/static/img/logo.png" />
                  </a>
                </Link>
                <span className="header-description">
                  Первое агентство Санкт-петербурга<br />
                  по организации Ресторанного бизнеса.
                </span>
              </div>
            </div>
            <div className="header-right-section">
              <div className="header-menu-phone">
                <Nav />
                <a className="header-phone" href="tel:+78126408018">
                  +7 (812) 640-80-18
                </a>
              </div>
              <div className="header-social">
                <a href="#" className="header-social-link vk" />
                <a href="#" className="header-social-link fb" />
                <a href="#" className="header-social-link inst" />
              </div>
            </div>
          </header>

          <div className="top-section-text-block">
            <div className="top-section-title">Сделайте лицензию</div>
            <div className="top-section-description">
              Равным образом рамки и место обучения кадров способствует<br />{' '}
              подготовки и реализации существенных финансовых<br /> и
              административных условий.
            </div>
            <a href="#" className="top-section-btn">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
