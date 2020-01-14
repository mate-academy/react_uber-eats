import React, { useState } from 'react';
import Input from '../Input/Input';

const Header = () => {
  const [address, setAddres] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;

    switch (target.name) {
      case 'address':
        return setAddres(value);
      case 'time':
        return setTime(value);
      case 'search':
        return setSearch(value);
      default:
        return null;
    }
  };

  return (
    <header className="header">
      <div className="content">
        <div className="header__wrapper">
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
              type="time"
              value={time}
              onChange={handleChange}
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
            href="/sing-in"
          >
            Sing In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
