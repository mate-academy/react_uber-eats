import React, { useState } from 'react';
import './header.scss';
import Input from '../Input/Input';

export const Header = () => {
  const [state, setstate] = useState({
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  const handleChange = ({ target }) => {
    setstate({
      ...state,
      [target.name]: target.value,
    });
  };

  const toggleSearch = () => {
    setstate({
      ...state,
      isMobileSearchVisible: !isMobileSearchVisible,
      isMobileDeliveryInfoVisible: false,
    });
  };

  const toggleClose = () => {
    setstate({
      ...state,
      isMobileSearchVisible: false,
      isMobileDeliveryInfoVisible: false,
    });
  };

  const toggleDeliveryInfo = () => {
    setstate({
      ...state,
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    });
  };

  const { address,
    time,
    search,
    isMobileSearchVisible,
    isMobileDeliveryInfoVisible } = state;

  return (
    <header className="header">
      <div className="content">
        <div className="header__inner">
          <img
            className="header__logo"
            src="./img/logo.svg"
            alt="uber eats logo"
          />

          <div className="header__delivery-info">
            <Input
              name="address"
              onChange={handleChange}
              value={address}
              placeholder="Address"
              iconUrl="./img/location.svg"
            />
            <Input
              name="time"
              onChange={handleChange}
              value={time}
              placeholder="Time"
              type="time"
            />
          </div>

          <div className="header__search">
            <Input
              name="search"
              onChange={handleChange}
              value={search}
              placeholder="Search"
              iconUrl="./img/search.svg"
            />
          </div>

          <div className="header__toggle-buttons">
            <button
              type="button"
              className="header__toggle-btn"
              onClick={toggleDeliveryInfo}
            >
              <img
                src="./img/location.svg"
                alt="place icon"
              />
            </button>
            <button
              type="button"
              className="header__toggle-btn"
              onClick={toggleSearch}
            >
              <img
                src="./img/search.svg"
                alt="search icon"
              />
            </button>
          </div>

          <a href="/sign-in" className="header__link">Sign In</a>
        </div>
        {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                onChange={handleChange}
                value={search}
                placeholder="Search"
                iconUrl="./img/search.svg"
                isSmall={false}
              />
            )}

            {isMobileDeliveryInfoVisible && (
              <>
                <Input
                  label="Where"
                  name="address"
                  onChange={handleChange}
                  value={address}
                  placeholder="Address"
                  iconUrl="./img/location.svg"
                />
                <Input
                  label="To"
                  name="time"
                  onChange={handleChange}
                  value={time}
                  placeholder="Time"
                  type="time"
                />
              </>
            )}
            <button
              type="button"
              className="mobile-controls__close"
              onClick={toggleClose}
            >
              <img
                src="./img/close.svg"
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
