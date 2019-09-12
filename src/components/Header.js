import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/';
const Header = ({ filterValue, onChange }) => {
  const [location, setLocation] = useState('London');

  const locationCloseRef = useRef();
  const locationInputRef = useRef();
  const searchCloseRef = useRef();
  const searchInputRef = useRef();
  const handleFocus = inputRef => inputRef.current.focus();
  const handleBlur = inputRef => inputRef.current.blur();

  return (
    <header id="to_top_of_page" className="header">
      <div className="header__wrapper">

        <a href="/" tabIndex="-1" className="header__logo">
          <img
            alt="Uber Eats"
            src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
          />
        </a>

        <form
          className="form header__location"
          tabIndex="-1"
        >
          <input
            type="text"
            name="delivery-adress"
            list="location"
            value={location}
            ref={locationInputRef}
            onChange={event => setLocation(event.target.value)}
            aria-label="choose delivery adress"
            className="form__input location__input"
            placeholder="Location"
          />

          <button
            type="button"
            className={classnames(
              'form__clear form__btn',
            )}
            onClick={() => {
              handleFocus(locationInputRef);
              setLocation('');
            }}
          >
              Clear
          </button>
          <button
            type="button"
            ref={locationCloseRef}
            className="form__btn form__close"
            onClick={() => {
              setLocation('London');
              handleBlur(locationCloseRef);
            }}
          >
            <img alt="CLose" className="form__close-img" />
          </button>
        </form>

        <select
          name="order-time"
          aria-label="select delivery time"
          className="header__delivery-time"
          defaultValue="now"
          tabIndex="0"
        >
          <option value="now">Delivery now</option>
          <option value="plan">Schedule for later</option>
        </select>

        <form
          className="header__search form"
          tabIndex="-1"
        >
          <input
            type="text"
            name="restaurant-search-field"
            value={filterValue}
            ref={searchInputRef}
            autoComplete="off"
            onChange={onChange}
            aria-label="restaurant search field"
            className="form__input search__input"
            placeholder="Search"
          />
          <button
            type="button"
            className={classnames(
              'form__clear',
              'form__btn',
            )}
            onClick={() => {
              handleFocus(searchInputRef);
            }}
          >
              Clear
          </button>
          <button
            type="button"
            ref={searchCloseRef}
            className="form__btn form__close"
            onClick={() => {
              handleBlur(searchCloseRef);
            }}
          >

            <img alt="CLose" className="form__close-img" />
          </button>
        </form>

        <a
          href="/"
          className="header__sign-in"
          onClick={event => event.preventDefault()}
          tabIndex="-1"
        >
           Sing in
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Header;
