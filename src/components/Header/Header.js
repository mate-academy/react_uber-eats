import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Input from '../Input/Input';

const Header = ({
  setAddress,
  setTime,
  setSearch,
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
          <img src="./images/logo.svg" alt="Uber Eats" />
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
          <Input
            name="search"
            onChange={e => debouncedHandleChange(e.target.value, 'search')}
            placeholder="Search"
            iconUrl="./images/search.svg"
            className="header__search"
          />
          <a
            className="header__link"
            href="/"
          >
          Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};
export default Header;
