/*eslint-disable*/
import React from 'react';
import './Header.scss';

class Header extends React.Component {
  state = [];

  render() {
    return (
      <header id="head" className="Header">
        <div className="Header__logo">
          <img src="./img/logo.svg" alt="logo" />
        </div>
        <div className="Header__nav-time">
          <button className="Header__nav">Kiev</button>
          <button className="Header__time">Deliver Time</button>
        </div>
        <div className="Header__search-acc">
          <button className="Header__search">Search</button>
          <button className="Header__acc">Sign in</button>
        </div>
      </header>
    )}
}

export default Header;
