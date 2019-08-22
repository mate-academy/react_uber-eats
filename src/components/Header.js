import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { filterStores, getFilterValue } from '../store';

const Header = ({ search, filterValue }) => {
  const [searchIsActive, setSearch] = useState(false);
  const [locationIsActive, setLocation] = useState(false);
  const inputRef = React.createRef();

  const handleFocus = () => inputRef.current.focus();

  useEffect(() => {
    if (searchIsActive) {
      inputRef.current.focus();
    }
  });

  return (
    <header id="up" className="header">
      <div className="header__wrapper">
        <div className="header__logo-and-delivery">
          <a
            href="/react_uber-eats"
            className="header__logo"
          >
            <img src="img/logo.svg" alt="Uber Eats" />
          </a>

          <div className="header__delivery">
            {locationIsActive ? (
              <form
                className="header__input-wrapper"
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
                className="header__location header__location-btn"
                onClick={() => setLocation(true)}
              >
                London
              </button>
            )}

            <select
              name="order-time"
              aria-label="select delivery time"
              className="header__delivery-time"
              defaultValue="Delivery now"
            >
              <option value="now">Delivery now</option>
              <option value="plan">Schedule for later</option>
            </select>
          </div>
        </div>

        <div className="header__search-and-sign-in">
          <div className="header__search">
            <div
              className={classnames('header__search-form', {
                invisibleItem: !searchIsActive,
              })}
              tabIndex="-1"
              // onBlur={() => setSearch(!searchIsActive)}
            >
              <input
                type="text"
                name="restaurant-search-field"
                value={filterValue}
                ref={inputRef}
                onKeyPress={event => (
                  event.key === 'Enter' ? setSearch(false) : null
                )}
                onChange={event => search(event.target.value)}
                aria-label="restaurant search field"
                className="header__search-input"
                placeholder="What are you craving?"
              />

              <button
                type="button"
                onClick={() => {
                  handleFocus();
                  search('');
                }}
                className={classnames(
                  'header__location-clear-btn',
                  'header__search-clear-btn',
                  { invisibleItem: !filterValue }
                )}
              >
                Clear
              </button>

              <button
                type="button"
                className="header__search-close-btn"
                onClick={() => {
                  setSearch(!searchIsActive);
                  search('');
                }}
              >
                <img src="img/closingCross.svg" alt="CLose" />
              </button>
            </div>

            <button
              type="button"
              className={classnames('header__search-btn', {
                invisibleItem: searchIsActive,
              })}
              onClick={() => setSearch(true)}
            >
              Search
            </button>
          </div>

          <a href="/react_uber-eats" className="header__sign-in">Sing in</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  search: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

const getData = state => ({
  filterValue: getFilterValue(state),
});

const getMethods = dispatch => ({
  search: value => dispatch(filterStores(value)),
});

export default connect(getData, getMethods)(Header);
