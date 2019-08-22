/* eslint-disable max-len */
import React from 'react';

const Header = () => (
  <div className="header__container">
    <a className="header__logo" href="/">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
        alt="logo"
      />
    </a>

    <div className="header__location-delivery-block">
      <button type="button" className="header__location">
        London
      </button>

      <button type="button" className="header__delivery-time">
        Delivery now
      </button>
    </div>

    <button type="button" className="header__search">
      Search
    </button>

    <a className="header__sign-in" href="/#">
      Sign in
    </a>
  </div>
);

export default Header;
