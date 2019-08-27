import React, { useState } from 'react';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/';
const Header = () => {
  const [activeSearch, setSearch] = useState(false);
  const [activeLocation, setLocation] = useState(false);

  return (
    <header id="to_top_of_page" className="header">
      <div className="header__wrapper">

        <a href="/" className="header__logo">
          <img
            alt="Uber Eats"
            src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
          />
        </a>

        {activeLocation ? (
          <form
            className="header__input-wrapper-loc"
            onChange={event => (event.key === 'Enter'
              ? setLocation(false)
              : '')}
          >
            <input
              type="text"
              name="delivery-adress"
              /* eslint-disable-next-line */
              autoFocus="true"
              onBlur={() => setLocation(false)}
              aria-label="choose delivery adress"
              className="header__location header__location-input"
              placeholder="Enter delivery address"
              value="London"
            />
            <button
              type="button"
              className="header__location-clear-btn"
            >
          Clear
            </button>
          </form>
        ) : (
          <button
            type="button"
            className="header__location header__location-btn"
            onClick={() => setLocation(true)}
          >
          London
          </button>
        )
        }

        <select
          name="order-time"
          aria-label="select delivery time"
          className="header__delivery-time"
        >
          <option value="now" selected>Delivery now</option>
          <option value="plan">Schedule for later</option>
        </select>

        {activeSearch ? (
          <div className="header__input-wrapper">
            <input
              type="search"
              name="restaurant-search-field"
              onKeyPress={event => (event.key === 'Enter'
                ? setSearch(false)
                : '')}
              /* eslint-disable-next-line */
              autoFocus="true"
              onBlur={() => setSearch(false)}
              aria-label="restaurant search field"
              className="header__search-input"
              placeholder="What are you craving?"
            />
          </div>
        ) : (
          <button
            type="button"
            className="header__search-btn"
            onClick={() => setSearch(true)}
          >
          Search
          </button>
        )}
        <a href="/" className="header__sign-in">Sing in</a>
      </div>
    </header>
  );
};

export default Header;
