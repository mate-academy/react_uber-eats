import React, { useState } from 'react';
import './Header.scss';
import Input from '../Input/input';

const Header = () => {
  const [address, setAddress] = useState('');
  const [search, setSearch] = useState('');
  const [time, setTime] = useState('');

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img src="./images/logo.svg" alt="Uber Eats" />
          <div className="header__delivery-info">
            <Input
              value={address}
              onChange={event => setAddress(event.target.value)}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />
            <Input
              type="time"
              value={time}
              onChange={event => setTime(event.target.value)}
              placeholder="Time"
            />
          </div>
          <Input
            className="header__search"
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Search"
            iconUrl="./images/search.svg"
          />
          <a className="header__link" href="/">
          Sign In
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
