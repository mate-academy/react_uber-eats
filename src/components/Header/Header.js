import React, { useState } from 'react';
import Input from '../Input';
import './Header.scss';

const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="header">
      <div className="content">
        <div className="header__wrapper">
          <img alt="Uber Eats" src="./images/logo.svg" />
          <div className="header__delivery-info">
            <Input
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="address"
              iconUrl="./images/address-icon.svg"
            />
            <Input
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              placeholder="Time"
              type="time"
            />
          </div>
          <Input
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            iconUrl="./images/search-icon.svg"
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
    </div>
  );
};

export default Header;
