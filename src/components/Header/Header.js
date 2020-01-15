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
          <img src="./images/header/logo-header.svg" alt="uber eats" />
          <div className="header__delivery-info">
            <Input
              name="address"
              placeholder="Address"
              value={address}
              onChange={handleChange}
              iconUrl="./images/header/place.svg"
            />
            <Input
              name="time"
              type="time"
              placeholder="Time"
              value={time}
              onChange={handleChange}
            />
          </div>

          <Input
            name="search"
            type="search"
            placeholder="Search"
            className="header__search"
            onChange={handleChange}
            value={search}
            iconUrl="./images/header/search.svg"
          />

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="header__link"
            href="#"
          >
            Sign in
          </a>
        </div>
      </div>

    </header>
  );
};
