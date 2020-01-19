import React, { useState } from 'react';
import './Header.scss';
import Input from '../Input/Input';

const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobileSearchVisible, setMobileSearchVisible] = useState(false);
  const [isMobileDeliveryVisible, setMobileDeliveryVisible] = useState(false);

  const handleInputChange = ({ target }) => {
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
    }
  };

  const toggleSearch = () => {
    setMobileSearchVisible(!isMobileSearchVisible);
    setMobileDeliveryVisible(false);
  };

  const toggleDelivery = () => {
    setMobileDeliveryVisible(!isMobileDeliveryVisible);
    setMobileSearchVisible(false);
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
            className="header__logo"
            src="./images/logo.svg"
            alt="Uber Eats Logo"
          />
          <div className="header__delivery-info">
            <Input
              name="address"
              value={address}
              onChange={handleInputChange}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              value={time}
              onChange={handleInputChange}
              placeholder="Time"
              type="time"
            />
          </div>
          <div className="header__search">
            <Input
              name="search"
              value={search}
              onChange={handleInputChange}
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
              <img
                src="./images/place.svg"
                alt="location icon"
              />
            </button>
            <button
              onClick={toggleSearch}
              type="button"
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
            Sign In
          </a>
        </div>
        {(isMobileSearchVisible || isMobileDeliveryVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                value={search}
                onChange={handleInputChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}

            {isMobileDeliveryVisible && (
              <>
                <Input
                  label="When"
                  name="time"
                  value={time}
                  onChange={handleInputChange}
                  placeholder="Time"
                  type="time"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  iconUrl="./images/place.svg"
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

export default Header;
