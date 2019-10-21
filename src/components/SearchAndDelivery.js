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

const SearchAndDelivery = ({
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
    <div className="main__search-and-delivery">
      <div className="main__delivery">
        <div
          role="form"
          tabIndex="-1"
          className="form delivery-form"
          onKeyPress={event => (
            event.key === 'Enter'
              ? handleBlur(locationInputRef)
              : null
          )}
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
        </div>

        <select
          name="order-time"
          aria-label="select delivery time"
          className="header__delivery-time main__delivery-time"
          defaultValue="Delivery now"
        >
          <option value="now">Delivery now</option>
          <option value="plan">Schedule for later</option>
        </select>
      </div>

      <div className="main__search">
        <div
          role="form"
          tabIndex="-1"
          className="form search-form"
          onKeyPress={event => (
            event.key === 'Enter'
              ? handleBlur(searchInputRef)
              : null
          )}
        >
          <input
            type="text"
            name="restaurant-search-field"
            value={filterValue}
            ref={searchInputRef}
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
        </div>
      </div>
    </div>
  );
};

SearchAndDelivery.propTypes = {
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

export default connect(getData, getMethods)(SearchAndDelivery);
