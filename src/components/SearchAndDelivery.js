import React, { useState } from 'react';

const SearchAndDelivery = () => {
  const [searchIsActive, setSearch] = useState(false);
  const [locationIsActive, setLocation] = useState(false);

  return (
    <div className="main__search-and-delivery">
      <div className="main__delivery">
        <select
          name="order-time"
          aria-label="select delivery time"
          className="header__delivery-time main__delivery-time"
          defaultValue="Delivery now"
        >
          <option value="now">Delivery now</option>
          <option value="plan">Schedule for later</option>
        </select>

        {locationIsActive ? (
          <form
            className="header__input-wrapper main__input-wrapper"
            onKeyPress={event => (
              event.key === 'Enter' ? setLocation(false) : null
            )}
            onBlur={() => setLocation(false)}
          >
            <input
              type="text"
              name="delivery-adress"
              autoFocus
              aria-label="choose delivery adress"
              className="header__location header__location-input"
              placeholder="Enter delivery address"
              defaultValue="London"
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
            className="header__location header__location-btn main__location-btn"
            onClick={() => setLocation(true)}
          >
            London
          </button>
        )}
      </div>

      <div className="main__search">
        {searchIsActive ? (
          <input
            type="search"
            name="restaurant-search-field"
            autoFocus
            onKeyPress={event => (
              event.key === 'Enter' ? setSearch(false) : null
            )}
            onBlur={() => setSearch(false)}
            aria-label="restaurant search field"
            className="header__search-input main__search-input"
            placeholder="What are you craving?"
          />
        ) : (
          <button
            type="button"
            className="header__search-btn"
            onClick={() => setSearch(true)}
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchAndDelivery;
