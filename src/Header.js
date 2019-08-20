import React from 'react';
import propTypes from 'prop-types';
import './styles/header.scss';

class Header extends React.Component {
  state = {
    locationChoice: false,
    filterChoice: false,
  };

  handlerChoiceLocation = () => {
    this.setState(state => ({
      locationChoice: !state.locationChoice,
      filterChoice: false,
    }));
  };

  handlerChoiceFilter = () => {
    this.setState(state => ({
      filterChoice: !state.filterChoice,
      locationChoice: false,
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
      <header>
        <div className="header">
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
                ? 'header-location__city--hidden'
                : 'header-location__city header-location__city--btn'}
            >
              <div className="header-svg">
                <img src="./images/location.svg" alt="location" />
              </div>
              <div className="header-location__name">
                {locationValue}
              </div>
            </button>
            <form className={locationChoice
              ? 'header-location__city header-location__city--form'
              : 'header-location__city--hidden'}
            >
              <div className="header-svg">
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
                className="header-location__city-clear"
                type="button"
                onClick={() => onClearLocation}
              >
                Clear
              </button>
              <button
                className="header-location__city-close"
                type="button"
                onClick={this.handlerChoiceLocation}
              >
                <img src="./images/button_close.svg" alt="close" />
              </button>
            </form>
          </div>
          <div className="header-time">
            <label
              htmlFor="time-deliver"
              className="header-time__deliver"
            >
              <img
                src="./images/clock.svg"
                className="header-time__deliver-clock"
                alt="time"
              />
              <select
                id="time-deliver"
                className="header-time__deliver-choice header-time__deliver-choice--array"
              >
                <option className="header-time__deliver-choice">
                  Deliver now
                </option>
                <option className="header-time__deliver-choice">
                  Schedule for later
                </option>
              </select>
            </label>
          </div>
          <div className="header__action">
            <div className="header__action-filter">
              <button
                type="button"
                onClick={this.handlerChoiceFilter}
                className={filterChoice
                  ? 'header__action-filter-search header__action-filter-search--hidden'
                  : 'header__action-filter-search'}
              >
                <div className="header-svg">
                  <img src="./images/search.svg" alt="search"/>
                </div>
                <div className="header__action-filter-name">
                  Search
                </div>
              </button>
              <form className={filterChoice
                ? 'header__action-filter-search header__action-filter-search--form'
                : 'header__action-filter-search header__action-filter-search--hidden'}
              >
                <div className="header-svg">
                  <img src="./images/search.svg" alt="location" />
                </div>
                <label htmlFor="filter-search">
                  <input
                    className="header__action-filter-input"
                    id="filter-search"
                    value={filterValue}
                    onChange={() => onHandlerFilter}
                    placeholder="What are you craving?"
                  />
                </label>
                <button
                  className="header__action-filter-close"
                  type="button"
                  onClick={this.handlerChoiceFilter}
                >
                  <img src="./images/button_close.svg" alt="close" />
                </button>
              </form>
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
