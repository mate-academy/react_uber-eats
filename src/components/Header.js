import React, { useState } from 'react';

const Header = () => {
  const [searchIsActive, setSearch] = useState(false);
  const [locationIsActive, setLocation] = useState(false);
  return (
    <header id="up" className="header">
    <div className="header__wrapper">
      <div className="header__logo-and-delivery">
        <a
          href="/"
          className="header__logo"
        >
          <img src="img/logo.svg" alt="Uber Eats" />
        </a>

        <div className="header__delivery">
            {locationIsActive ? (
              <div >
                <form
                  className="header__input-wrapper"
                  onKeyPress={(event) => (event.key === 'Enter' ? setLocation(false) : null)}
                >
                  <input
                    type="text"
                    name="delivery-adress"
                    autoFocus

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

              </div>
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

          <select name="order-time" aria-label="select delivery time" className="header__delivery-time">
            <option value="now" selected>Delivery now</option>
            <option value="plan">Schedule for later</option>
          </select>
        </div>
      </div>

      <div className="header__search-and-sign-in">
        {searchIsActive ? (
          <div className="header__input-wrapper">
            <input
              type="search"
              name="restaurant-search-field"
              autoFocus
              onKeyPress={(event) => (event.key === 'Enter' ? setSearch(false) : null)}
              onBlur = {() => setSearch(false)}
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

        <a href="#" className="header__sign-in">Sing in</a>
      </div>
    </div>
  </header>
  );
};

export default Header;
