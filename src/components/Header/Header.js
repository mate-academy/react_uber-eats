import React, { useState } from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'address':
        setAddress(target.value);
        break;

      case 'time':
        setTime(target.value);
        break;

      case 'search':
        setSearch(target.value);
        break;

      default:
        break;
    }
  };

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img
            src="./images/logo.svg"
            alt="UBER Eats"
            className="restaurant-logo"
          />
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
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};
