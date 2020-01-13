import React, { useState } from 'react';
import './Header.scss';
import { Input } from '../Input';

const inputs = {
  search: 'search',
  time: 'time',
  address: 'address',
};

export const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const [
    isMobileDeliveryInfoVisible,
    setIsMobileDeliveryInfoVisible] = useState(false);

  const handleChange = ({ target }) => {
    switch (target.name) {
      case inputs.search:
        return setSearch(target.value);

      case inputs.time:
        return setTime(target.value);

      default:
        return setAddress(target.value);
    }
  };

  const toggleSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
    setIsMobileDeliveryInfoVisible(false);
  };

  const toggleDeliveryInfo = () => {
    setIsMobileDeliveryInfoVisible(!isMobileDeliveryInfoVisible);
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
              value={search}
              onChange={handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>

          <div className="header__toggle-buttons">
            <button
              onClick={toggleDeliveryInfo}
              type="button"
              className="header__toggle-btn"
            >
              <img
                className="header__toggle-img"
                src="./images/place.svg"
                alt="place icon"
              />
            </button>
            <button
              onClick={toggleSearch}
              type="button"
              className="header__toggle-btn"
            >
              <img
                className="header__toggle-img header__toggle-img--search"
                src="./images/search.svg"
                alt="search icon"
              />
            </button>
          </div>

          <a
            className="header__link"
            href="/sign-in"
          >
            Sign In
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
              onClick={closeMobile}
              type="button"
              className="mobile-controls__close"
            >
              <img
                src="./images/close.svg"
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
