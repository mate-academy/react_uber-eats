import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="header__wrapper">
        <div className="header__wrapper__logo">

          <a className="header__wrapper__logo--link" aria-label="hidden" href="index.html">
            <div id="boxWrapper">
              <div className="boxBlack">U</div>
              <div className="boxBlack">b</div>
              <div className="boxBlack">e</div>
              <div className="boxBlack">r</div>
              <div></div>
              <div>E</div>
              <div>a</div>
              <div>t</div>
              <div>s</div>
            </div>
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
          <input
            className="search-sign--field"
            type="search"
            placeholder="Search for restaurant or cuisine"
          />
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
