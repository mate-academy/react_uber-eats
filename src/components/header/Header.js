import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__wrapper__logo">
          <a className="header__wrapper__logo--link" aria-label="hidden" href="index.html">
            <img
              src="https://githubfordmitry.github.io/react_uber-eats/api/img/Logo.png"
              alt="Logo Uber Eats"
              className="header__wrapper__logo--link--img"
            />
          </a>
        </div>
        <div className="header__wrapper__add--info">
          <div className="location">
            <button
              type="submit"
              className="location__city"
            >
              London
            </button>
          </div>
          <div className="delivery">
            <button className="delivery__time">Deliver now</button>
          </div>
        </div>
        <div className="search-sign">
          <button className="search">
            Search
          </button>
          <div className="sign">
            <a href="#/">
              Sign
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
