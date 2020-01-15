import React, { useState } from 'react';
import Input from '../input/Input';
import './Header.scss';

const Header = () => {
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');
  const [isMobSearchVisible, setMobSearchVisible] = useState(false);
  const [isMobDeliveryVisible, setMobDeliveryVisible] = useState(false);

  const toggleSearch = () => {
    setMobSearchVisible(!isMobSearchVisible);
    setMobDeliveryVisible(false);
  };

  const toggleDelivery = () => {
    setMobDeliveryVisible(!isMobDeliveryVisible);
    setMobSearchVisible(false);
  };

  const closeMobile = () => {
    setMobSearchVisible(false);
    setMobDeliveryVisible(false);
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
              onChange={event => setAddress(event.target.value)}
              placeholder="Address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              value={time}
              onChange={event => setTime(event.target.value)}
              type="time"
            />
          </div>
          <div className="header__search">
            <Input
              name="search"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>
          <div className="header__toggle-buttons">
            <button
              className="header__toggle-btn"
              type="button"
              onClick={toggleDelivery}
            >
              <img
                src="./images/place.svg"
                alt="place icon"
              />
            </button>
            <button
              className="header__toggle-btn"
              type="button"
              onClick={toggleSearch}
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
        {(isMobSearchVisible || isMobDeliveryVisible)
          && (
            <div className="mobile-controls">
              {isMobSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}
              {isMobDeliveryVisible && (
              <>
                <Input
                  label="When"
                  name="time"
                  value={time}
                  onChange={event => setTime(event.target.value)}
                  type="time"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="address"
                  value={address}
                  onChange={event => setAddress(event.target.value)}
                  placeholder="Address"
                  iconUrl="./images/place.svg"
                  isSmall={false}
                />
              </>
              )}
              <button
                className="mobile-controls__close"
                type="button"
                onClick={closeMobile}
              >
                <img
                  src="./images/x.svg"
                  alt="search icon"
                />
              </button>
            </div>
          )
        }
      </div>
    </header>
  );
};

export default Header;
