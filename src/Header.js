import React from 'react';

const Header = () => (
  <header id="to-top" className="header">
    <div className="logo">
      <a href="#!"><img src="image/Logo.png" alt="Logo" /></a>
    </div>
    <div className="location-delivery">
      <button type="button" className="location-btn btn">London</button>
      <button type="button" className="delivery-btn btn">Delivery now</button>
    </div>
    <div className="search-login">
      <button type="search" className="search-btn btn">Search</button>
      <a className="log-in" href="#!">Sign in</a>
    </div>
  </header>
);

export default Header;
