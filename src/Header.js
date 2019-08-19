import React from 'react';
import propTypes from 'prop-types';

class Header extends React.Component {
  state = {
    locationChoice: false,
    filterChoice: false,
  };

  handlerChoiceLocation = () => {
    this.setState(state => ({
      locationChoice: !state.locationChoice,
    }));
  };

  handlerChoiceFilter = () => {
    this.setState(state => ({
      filterChoice: !state.filterChoice,
    }));
  };

  render() {
    const {
      locationValue,
      onHandlerChangeLocation,
      onClearLocation,
      filterValue,
      onHandlerFilter,
    } = this.props;
    const { locationChoice, filterChoice } = this.state;

    return (
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
              alt="logo Uber Eats"
            />
          </div>
          <div className="header-location">
            <button
              type="button"
              onClick={this.handlerChoiceLocation}
              className={locationChoice
                ? 'header-location--hidden'
                : 'header-location__city'}
            >
              <div className="header-location__svg">
                <img src="./images/location.svg" alt="location" />
              </div>
              <div className="header-location__name">
                {locationValue}
              </div>
            </button>
            <form className={locationChoice
              ? 'header-location__city'
              : 'header-location--hidden'}
            >
              <div className="header-location__svg">
                <img src="./images/location.svg" alt="location" />
              </div>
              <label htmlFor="choice-location">
                <input
                  className="header-location__city-choice"
                  id="choice-location"
                  value={locationValue}
                  onChange={() => onHandlerChangeLocation}
                />
              </label>
              <button
                className="header-location__city-close"
                type="button"
                onClick={() => onClearLocation}
              >
                Clear
              </button>
              <button
                className="header-location__city-end"
                type="button"
                onClick={this.handlerChoiceLocation}
              >
                <img src="./images/button-close.svg" alt="close" />
              </button>
            </form>
          </div>
          <div className="header-time">
            <label htmlFor="time-deliver">
              <select id="time-deliver">
                <option className="header-time__deliver">
                  <img src="./images/clock.svg" alt="time" />
                  <span>Deliver now</span>
                </option>
                <option className="header-time__deliver">
                  <img src="./images/calendar-today.svg" alt="time" />
                  <span>Schedule for later</span>
                </option>
              </select>
            </label>
          </div>
          <div className="header-filter">
            <button
              type="button"
              onClick={this.handlerChoiceLocation}
              className={filterChoice
                ? 'header-filter--hidden'
                : 'header-filter__search'}
            >
              <div className="header-filter__svg">
                <img src="./images/search.svg" alt="search" />
              </div>
              <div className="header-filter__name">
                Search
              </div>
            </button>
            <form className={filterChoice
              ? 'header-filter--hidden'
              : 'header-filter__search'}
            >
              <div className="header-filter__svg">
                <img src="./images/location.svg" alt="location" />
              </div>
              <label htmlFor="filter-search">
                <input
                  className="header-filter__input"
                  id="filter-search"
                  value={filterValue}
                  onChange={() => onHandlerFilter}
                />
              </label>
              <button
                className="header-filter__input-close"
                type="button"
                onClick={this.handlerChoiceFilter}
              >
                <img src="./images/button-close.svg" alt="close" />
              </button>
            </form>
          </div>
          <a
            className="header-registration"
            href="#"
          >
            Sign in
          </a>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  locationValue: propTypes.string.isRequired,
  onHandlerChangeLocation: propTypes.func.isRequired,
  onClearLocation: propTypes.func.isRequired,
  filterValue: propTypes.string.isRequired,
  onHandlerFilter: propTypes.func.isRequired,
};

export default Header;
