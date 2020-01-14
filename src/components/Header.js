import React, { useState } from 'react';
import Input from './Input';
import '../styles/Header.scss';

const Header = () => {
  const [inputValues, setInputValues] = useState({
    address: '',
    time: '',
    search: '',
  });
  const [isMobileSearchVisible, setMobileSearchVisible] = useState(false);
  const [isMobileDeliveryVisible, setMobileDeliveryVisible] = useState(false);

  const toggleSearch = () => {
    setMobileSearchVisible(!isMobileSearchVisible);
    setMobileDeliveryVisible(false);
  };

  const toggleDelivery = () => {
    setMobileDeliveryVisible(!isMobileDeliveryVisible);
    setMobileSearchVisible(false);
  };

  const handleChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const closeMobile = () => {
    setMobileDeliveryVisible(false);
    setMobileSearchVisible(false);
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
              value={inputValues.address}
              onChange={handleChange}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              value={inputValues.time}
              onChange={handleChange}
              placeholder="Time"
              type="time"
            />
          </div>

          <div className="header__search">
            <Input
              name="search"
              value={inputValues.search}
              onChange={handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>

          <div className="header__toggle-buttons">
            <button
              type="button"
              className="header__toggle-btn"
              onClick={toggleDelivery}
            >
              <img
                src="./images/place.svg"
                alt="place icon"
                className="header__toggle-btn--place"
              />
            </button>

            <button
              type="button"
              className="header__toggle-btn"
              onClick={toggleSearch}
            >
              <img src="./images/search.svg" alt="search icon" />
            </button>
          </div>

          <a className="header__link" href="/sign-in">Sign in</a>
        </div>

        {(isMobileDeliveryVisible || isMobileSearchVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                value={inputValues.search}
                onChange={handleChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}

            {isMobileDeliveryVisible && (
              <>
                <Input
                  label="Where"
                  name="address"
                  value={inputValues.address}
                  onChange={handleChange}
                  placeholder="Address"
                  iconUrl="./images/place.svg"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="time"
                  value={inputValues.time}
                  onChange={handleChange}
                  placeholder="Time"
                  type="time"
                  isSmall={false}
                />
              </>
            )}

            <button
              type="button"
              className="mobile-controls__close"
              onClick={closeMobile}
            >
              <img src="./images/close.svg" alt="close icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
