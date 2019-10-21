import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ IMG_URL }) => (
  <header className="header">
    <div className="container header__container">
      <a href="#?">
        <img
          alt="UberEats logo"
          src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
        />
      </a>
      <button
        type="button"
        className="header__button-location"
      >
        London
      </button>
      <button
        type="button"
        className="header__button-delivery-time"
      >
        Deliver now
      </button>
      <button
        type="button"
        className="header__button-search"
      >
        Search
      </button>
      <a
        href="#$"
        className="header__sign-in"
      >
        Sign in
      </a>
    </div>
  </header>
);

Header.propTypes = {
  IMG_URL: PropTypes.string,
}.isRequired;

export default Header;
