import React from 'react';
import propTypes from 'prop-types';
import './styles/header.scss';

import FilterHomePage from './FilterHomePage';
import LocationAndTime from './LocationAndTime';


const Header = ({
  locationValue,
  onHandlerChangeLocation,
  onClearLocation,
  filterValue,
  onHandlerFilter,
}) => (
  <header>
    <div className="header">
      <div className="header-logo">
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
          alt="logo Uber Eats"
        />
      </div>
      <div className="header-location-and-time">
        <LocationAndTime
          locationValue={locationValue}
          onHandlerChangeLocation={onHandlerChangeLocation}
          onClearLocation={onClearLocation}
        />
      </div>

      <div className="header__action">
        <div className="header__action-filter">
          <FilterHomePage
            filterValue={filterValue}
            onHandlerFilter={onHandlerFilter}
          />
        </div>
        <a
          className="header__action-registration"
          href="#"
        >
          Sign in
        </a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  locationValue: propTypes.string.isRequired,
  onHandlerChangeLocation: propTypes.func.isRequired,
  onClearLocation: propTypes.func.isRequired,
  filterValue: propTypes.string.isRequired,
  onHandlerFilter: propTypes.func.isRequired,
};

export default Header;
