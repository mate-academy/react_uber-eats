import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Input from '../Input/Input';

const Header = ({
  setAddress,
  setTime,
  setSearch,
  toggleSearch,
  toggleDelivery,
  isSearchVisible,
  isDeliveryVisible,
  closeMobile,
}) => {
  const handleChange = (value, name) => {
    switch (name) {
      case 'address': return setAddress(value);
      case 'time': return setTime(value);
      case 'search': return setSearch(value);
      default: return undefined;
    }
  };

  const debounce = (f, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => f(...args), delay);
    };
  };

  const debouncedHandleChange = debounce(handleChange, 1000);

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
              onChange={e => debouncedHandleChange(e.target.value, 'address')}
              placeholder="address"
              iconUrl="./images/place.svg"
            />
            <Input
              name="time"
              onChange={e => debouncedHandleChange(e.target.value, 'time')}
              placeholder="Time"
              className="header__time"
              type="time"
            />
          </div>
          <div className="header__search">
            <Input
              name="search"
              onChange={e => debouncedHandleChange(e.target.value, 'search')}
              placeholder="Search"
              iconUrl="./images/search.svg"
            />
          </div>
          <div className="header__toggle-buttons">
            <button
              onClick={toggleDelivery}
              className="header__toggle-btn"
              type="button"
            >
              <img
                src="./images/place.svg"
                alt="place icon"
              />
            </button>
            <button
              onClick={toggleSearch}
              className="header__toggle-btn"
              type="button"
            >
              <img
                src="./images/search.svg"
                alt="search icon"
              />
            </button>
          </div>
          <a
            className="header__link"
            href="/"
          >
          Sign in
          </a>
        </div>
        {(isSearchVisible || isDeliveryVisible) && (
          <div className="header__mobile-controls mobile-controls">
            {isSearchVisible && (
              <Input
                label="search"
                name="search"
                onChange={e => debouncedHandleChange(e.target.value, 'search')}
                placeholder="Search"
                iconUrl="./images/search.svg"
                isSmall={false}
              />
            )}
            {isDeliveryVisible && (
            <>
              <Input
                label="where"
                name="address"
                onChange={e => debouncedHandleChange(e.target.value, 'address')}
                placeholder="address"
                iconUrl="./images/place.svg"
                isSmall={false}

              />
              <Input
                label="to"
                name="time"
                onChange={e => debouncedHandleChange(e.target.value, 'time')}
                placeholder="Time"
                className="header__time"
                type="time"
                isSmall={false}
              />
            </>
            )}
            <button
              onClick={closeMobile}
              className="mobile-controls__close"
              type="button"
            >
              <img
                src="./images/mdi_close.svg"
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  toggleDelivery: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
  closeMobile: PropTypes.func.isRequired,
  isSearchVisible: PropTypes.bool.isRequired,
  isDeliveryVisible: PropTypes.bool.isRequired,
};
export default Header;
