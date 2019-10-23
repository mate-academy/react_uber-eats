import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="main-block" >
        <a className="logo header-link" href="#"><img src="images/icons/logo.svg" alt="logo" /></a>

        <button className="adress-box header-button">Kyiv</button>
        <button className="time header-button">Deliver now</button>
      </div>

      <div className="additional-block">
        <button className="search-box header-button" >Search</button>

        <a className="register header-link" href="#">Sign in</a>

      </div>
    </div>
  </header>
)

export default Header;
