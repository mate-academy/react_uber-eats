import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './header.scss';
import logo from './pics/logo-black.svg';
import closeIcon from './pics/close-icon.svg';

const Header = () => {
  const [isToggled, toggle] = useState(false);

  return (
    <div className="width width--header">
      <header className="header">
        <section className="header__logo">
          <HashLink to={{
            pathname: '/restaurants',
            hash: 'top',
          }}
          >
            <img src={logo} alt="Uber Eats logotype" />
          </HashLink>
        </section>

        <form className="header__form">
          <section className="header__inputs-address-time">
            <input
              // eslint-disable-next-line max-len
              className="header__input header__input--address header__input--address--top"
              type="text"
            />
            <input
              // eslint-disable-next-line max-len
              className="header__input header__input--time header__input--time--top"
              type="time"
            />
          </section>

          <section className="header__input-btns">
            <input
              className="header__input header__input--query"
              type="text"
              placeholder="Search"
            />

            <section className="header__toggle-btns">
              <button
                className="header__toggle-btn header__toggle-btn--address"
                type="button"
                onClick={() => toggle(!isToggled)}
              />
              <button
                className="header__toggle-btn header__toggle-btn--query"
                type="button"
                onClick={() => toggle(!isToggled)}
              />
            </section>

            <button
              className="header__sign-in"
              type="button"
            >
              Sign in
            </button>
          </section>
        </form>
      </header>

      {isToggled && (
        <section
          // eslint-disable-next-line max-len
          className="header__inputs-address-time header__inputs-address-time--toggled"
        >
          <section>
            <p className="header__auxiliary">When</p>
            <input
              className="header__input header__input--time"
              type="time"
            />
          </section>
          <section className="header__toggled-address">
            <p className="header__auxiliary">To</p>
            <input
              className="header__input header__input--address"
              type="text"
            />
          </section>

          <button
            className="header__close"
            type="button"
            onClick={() => toggle(!isToggled)}
          >
            <img src={closeIcon} alt="Close Icon" />
          </button>
        </section>
      )}
    </div>
  );
};

export default Header;
