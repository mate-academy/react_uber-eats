import React, { useState, useRef } from 'react';
import classnames from 'classnames';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/';
const Header = () => {
  const [search, setSearch] = useState('');
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

        <a href="/" className="header__logo">
          <img
            alt="Uber Eats"
            src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
          />
        </a>

        <form
          className="form header__location"
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
            <img src="../image/close.svg" alt="CLose" />
          </button>
        </form>

        <select
          name="order-time"
          aria-label="select delivery time"
          className="header__delivery-time"
        >
          <option value="now" selected>Delivery now</option>
          <option value="plan">Schedule for later</option>
        </select>

        <form
          className="header__search form"
        >
          <input
            type="text"
            name="restaurant-search-field"
            value={search}
            ref={searchInputRef}
            autoComplete="off"
            onChange={event => setSearch(event.target.value)}
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
              setSearch('');
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

            <img src="../image/close.svg" alt="CLose" />
          </button>
        </form>

        <a
          href="/"
          className="header__sign-in"
          onClick={event => event.preventDefault()}
        >
           Sing in
        </a>
      </div>
    </header>
  );
};

export default Header;
