/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Input } from '../Input';
import './Header.scss';

export const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [isMobileDeliveryInfoVisible, setIsMobileDeliveryInfoVisible]
    = useState(false);

  const setters = {
    address: setAddress,
    time: setTime,
    search: setSearch,
  };

  const handleChange = ({ target }) => {
    setters[target.name](target.value);
  };

  const toggleSearch = () => {
    setIsMobileSearchVisible(prevIsMobileSearchVisible => (
      !prevIsMobileSearchVisible
    ));
    setIsMobileDeliveryInfoVisible(false);
  };

  const toggleDeliveryInfo = () => {
    setIsMobileDeliveryInfoVisible(prevIsMobileDeliveryInfoVisible => (
      !prevIsMobileDeliveryInfoVisible
    ));
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
            className="header__logo"
            src="./images/header/logo-header.svg"
            alt="uber eats"
          />
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

          <div className="header__search">
            <Input
              name="search"
              placeholder="Search"
              onChange={handleChange}
              value={search}
              iconUrl="./images/header/search.svg"
            />
          </div>

          <div className="header__toggle-buttons">
            <button
              type="button"
              onClick={toggleDeliveryInfo}
              className="header__toggle-btn"
            >
              <img
                src="./images/header/place.svg"
                alt="place icon"
              />
            </button>
            <button
              type="button"
              onClick={toggleSearch}
              className="header__toggle-btn"
            >
              <img
                src="./images/header/search.svg"
                alt="search icon"
              />
            </button>
          </div>

          <a
            className="header__link"
            href="#"
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
                placeholder="Search"
                onChange={handleChange}
                value={search}
                iconUrl="./images/header/search.svg"
                isSmall={false}
              />
            )}
            {isMobileDeliveryInfoVisible && (
              <>
                <Input
                  label="Where"
                  name="address"
                  placeholder="Address"
                  value={address}
                  onChange={handleChange}
                  iconUrl="./images/header/place.svg"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="time"
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={handleChange}
                  isSmall={false}
                />
              </>
            )}

            <button
              onClick={closeMobile}
              type="button"
              className="mobile-controls__close"
            >
              <img
                src="./images/header/close.svg"
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>

    </header>
  );
};
