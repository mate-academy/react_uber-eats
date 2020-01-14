import React from 'react';
import Input from '../input/Input';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="content">
      <div className="header__inner">
        <img src="./images/logo.svg" alt="Uber Eats" />
        <div className="header__delivery-info">
          <Input
            name="address"
            value=""
            onCange={() => {}}
            placeholder="Address"
            iconUrl="./images/place.svg"
          />
          <Input
            name="time"
            value=""
            onCange={() => {}}
            placeholder="Time"
          />
        </div>
        <Input
          name="search"
          value=""
          onCange={() => {}}
          placeholder="Search"
          iconUrl="./images/search.svg"
          className="header__search"
        />
        <a
          className="header__link"
          href="/sign-in"
        >
            Sign in
        </a>
      </div>
    </div>
  </header>
);

export default Header;
