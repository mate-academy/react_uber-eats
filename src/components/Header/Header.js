import React, { useState } from 'react';
import { Input } from '../Input';
import './Header.scss';

export const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');

  const setters = {
    address: setAddress,
    time: setTime,
    search: setSearch,
  };

  const handleChange = ({ target }) => {
    setters[target.name](target.value);
  };

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img src="./images/logo.svg" alt="Uber Eats" />
          <div className="header__delivery-info">
            <Input
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              value={time}
              onChange={handleChange}
              placeholder="Time"
              type="time"
            />
          </div>
          <Input
            name="search"
            type="search"
            value={search}
            onChange={handleChange}
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
};
