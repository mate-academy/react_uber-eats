import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  filterStores,
  getFilterValue,
  setLocations,
  getLocations,
  setLocationValue,
  getLocationValue,
} from '../store';

const Header = ({
  search,
  filterValue,
  autocompleteLocation,
  locations,
  locationValue,
  changeLocation,
}) => {
  const locationCloseRef = useRef();
  const locationInputRef = useRef();
  const searchCloseRef = useRef();
  const searchInputRef = useRef();
  const URL = 'https://mate-academy.github.io/react_uber-eats/api';

  const handleFocus = inputRef => inputRef.current.focus();
  const handleBlur = inputRef => inputRef.current.blur();

  useEffect(() => {
    async function fetchData() {
      await fetch(`${URL}/locationAutocomplete/${locationValue}.json`)
        .then(response => response.json())
        .then(({ data }) => {
          autocompleteLocation(data);
        });
    }

    if (locationValue) {
      fetchData();
    }
  }, [locationValue]);

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
            <form
              className="form"
              onKeyPress={(event) => {
                event.preventDefault();

                return event.key === 'Enter'
                  ? handleBlur(locationInputRef)
                  : null;
              }}
            >
              <input
                type="text"
                name="delivery-adress"
                list="location"
                ref={locationInputRef}
                value={locationValue}
                onChange={event => changeLocation(event.target.value)}
                aria-label="choose delivery adress"
                className="form__input location__input"
                placeholder="Location"
              />

              <button
                type="button"
                className={classnames(
                  'form__clear form__btn',
                  { invisibleItem: !locationValue }
                )}
                onClick={() => {
                  handleFocus(locationInputRef);
                  changeLocation('');
                }}
              >
                Clear
              </button>

              <button
                type="button"
                ref={locationCloseRef}
                className="form__btn form__close"
                onClick={() => {
                  changeLocation('');
                  handleBlur(locationCloseRef);
                }}
              >
                <img src="img/closingCross.svg" alt="CLose" />
              </button>

              <datalist
                id="location"
              >
                {locations.map(location => (
                  <option
                    key={location.id}
                    value={location.addressLine1}
                  />
                ))}
              </datalist>
            </form>

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
          <form
            className="header__search form"
            onKeyPress={(event) => {
              event.preventDefault();

              return event.key === 'Enter'
                ? handleBlur(searchInputRef)
                : null;
            }}
          >
            <input
              type="text"
              name="restaurant-search-field"
              value={filterValue}
              ref={searchInputRef}
              autoComplete="off"
              onChange={event => search(event.target.value)}
              aria-label="restaurant search field"
              className="form__input search__input"
              placeholder="Search"
            />

            <button
              type="button"
              className={classnames(
                'form__clear',
                'form__btn',
                { invisibleItem: !filterValue }
              )}
              onClick={() => {
                handleFocus(searchInputRef);
                search('');
              }}
            >
              Clear
            </button>

            <button
              type="button"
              ref={searchCloseRef}
              className="form__btn form__close"
              onClick={() => {
                search('');
                handleBlur(searchCloseRef);
              }}
            >
              <img src="img/closingCross.svg" alt="CLose" />
            </button>
          </form>

          <a href="/react_uber-eats" className="header__sign-in">
            Sing in
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  search: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  autocompleteLocation: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired,
  locationValue: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
};

const getData = state => ({
  filterValue: getFilterValue(state),
  locations: getLocations(state),
  locationValue: getLocationValue(state),
});

const getMethods = dispatch => ({
  search: value => dispatch(filterStores(value)),
  autocompleteLocation: locations => dispatch(setLocations(locations)),
  changeLocation: value => dispatch(setLocationValue(value)),
});

export default connect(getData, getMethods)(Header);
