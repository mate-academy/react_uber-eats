import React, { useState } from 'react';
import { Input } from '../Input';
import './Header.scss';

export const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [
    isMobileDeliveryInfoVisible,
    setIsMobileDeliveryInfoVisible,
  ] = useState(false);

  const setters = {
    address: setAddress,
    time: setTime,
    search: setSearch,
  };

  const handleChange = ({ target }) => {
    setters[target.name](target.value);
  };

  const toggleSearch = () => {
    setIsMobileSearchVisible(true);
    setIsMobileDeliveryInfoVisible(false);
  };

  const toggleDeliveryInfo = () => {
    setIsMobileDeliveryInfoVisible(true);
    setIsMobileSearchVisible(false);
  };

  const closeMobile = () => {
    setIsMobileSearchVisible(false);
    setIsMobileDeliveryInfoVisible(false);
  };

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img
            src="./images/logo.svg"
            alt="Uber Eats"
            className="header__logo"
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
          <div className="header__search">
            <Input
              name="search"
              type="search"
              value={search}
              onChange={handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>
          <div className="header__toggle-buttons">
            <button
              type="button"
              onClick={toggleDeliveryInfo}
              className="header__toggle-btn"
            >
              <img
                src="./images/place.svg"
                alt="place icon"
              />
            </button>
            <button
              type="button"
              onClick={toggleSearch}
              className="header__toggle-btn"
            >
              <img
                src="./images/search.svg"
                alt="search icon"
              />
            </button>
          </div>

          <a
            className="header__link"
            href="/sign-in"
          >
            Sign in
          </a>
        </div>
        {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                value={search}
                onChange={handleChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}

            {isMobileDeliveryInfoVisible && (
              <>
                <Input
                  label="Where"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  placeholder="Address"
                  iconUrl="./images/place.svg"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="time"
                  value={time}
                  onChange={handleChange}
                  placeholder="Time"
                  type="time"
                  isSmall={false}
                />
              </>
            )}

            <button
              type="button"
              onClick={closeMobile}
              className="mobile-controls__close"
            >
              <img
                src="./images/close.svg"
                alt="search icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
