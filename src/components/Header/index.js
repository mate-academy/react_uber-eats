import React from 'react';

import './Header.scss';
import logo from './pics/logo-black.svg';

const Header = () => (
  <div className="width width--header">
    <header className="header">
      <section className="header__logo">
        <a href="#/">
          <img src={logo} alt="Uber Eats logotype" />
        </a>
      </section>

      <form className="header__form">
        <section className="header__toggle-btns">
          <button
            className="header__toggle-btn header__toggle-btn--address"
            type="button"
          />
          <button
            className="header__toggle-btn header__toggle-btn--query"
            type="button"
          />
        </section>

        <section>
          <input
            className="header__input header__input--address"
            type="text"
          />
          <input
            className="header__input header__input--time"
            type="time"
          />
        </section>

        <section>
          <input
            className="header__input header__input--query"
            type="text"
            placeholder="Search"
          />
          <button
            className="header__sign-in"
            type="button"
          >
            Sign in
          </button>
        </section>
      </form>
    </header>
  </div>
);

export default Header;
