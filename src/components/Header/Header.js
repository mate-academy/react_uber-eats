import React, { useState } from 'react';
import Input from '../Input/Input';

const Header = () => {
  const [address, setAddres] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobileSearch, setMobileSearch] = useState(false);
  const [isMobileDelivery, setMobileDelivery] = useState(false);

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

  const toggleSearch = () => {
    setMobileSearch(!isMobileSearch);
    setMobileDelivery(false);
  };

  const toggleDelivery = () => {
    setMobileDelivery(!isMobileDelivery);
    setMobileSearch(false);
  };

  const closeMobile = () => {
    setMobileDelivery(false);
    setMobileSearch(false);
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

          <div className="header__search">
            <Input
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>

          <div className="header__toggle-buttons">
            <button
              onClick={toggleDelivery}
              type="button"
              className="header__toggle-btn"
            >
              <img src="./images/place.svg" alt="place icon" />
            </button>
            <button
              onClick={toggleSearch}
              type="button"
              className="header__toggle-btn"
            >
              <img src="./images/search.svg" alt="search icon" />
            </button>
          </div>

          <a
            className="header__link"
            href="/sing-in"
          >
            Sing In
          </a>
        </div>
        {(isMobileSearch || isMobileDelivery) && (
          <div className="header__mobile-controls mobile__controls">
            {isMobileSearch && (
              <Input
                name="search"
                value={search}
                onChange={handleChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
              />
            )}
            {isMobileDelivery && (
              <>
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
              </>
            )}

            <button
              onClick={closeMobile}
              type="button"
              className="mobile__controls-close"
            >
              <img src="./images/close.svg" alt="place icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
