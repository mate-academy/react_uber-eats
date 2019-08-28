import React from 'react';
import propTypes from 'prop-types';

class LocationAndTime extends React.Component {
  state = {
    locationChoice: false,
  };

  handlerChoiceLocation = () => {
    this.setState(state => ({
      locationChoice: !state.locationChoice,
    }));
  };

  render() {
    const {locationChoice} = this.state;
    const {
      locationValue,
      onHandlerChangeLocation,
      onClearLocation,
    } = this.props;

    return (
      <>
        <div className="main__header-column--location">
          <span className="main__header-column-description">To</span>
          <form className="header__form header__form--location">
            <div className="header__location">
              <div className="header__svg header__svg--location">
                <img src="./images/location1.svg" alt="location" />
              </div>
              <input
                className="header__location-city-choice"
                id="choice-location"
                value={locationValue}
                placeholder={locationChoice}
                onChange={onHandlerChangeLocation}
              />
              <button
                className="header__location-city-clear header__btn"
                type="button"
                onClick={() => onClearLocation}
              >
                Clear
              </button>
              <button
                className="header__location-city-close header__btn"
                type="button"
                onClick={this.handlerChoiceLocation}
                disabled
              >
                <img src="./images/button_close.svg" alt="close" />
              </button>
            </div>
          </form>
        </div>

        <div className="main__header-column">
          <span className="main__header-column-description">When</span>
          <form className="header__form">
            <div className="header__time">
              <div className="header__svg header__svg--time">
                <img
                  src="./images/clock.svg"
                  className="header-svg"
                  alt="time"
                />
              </div>
              <select
                id="time-deliver"
                className="header__time-deliver-choice"
              >
                <option
                  className="header__time-deliver-choice"
                  value="now"
                  selected
                >
                  ASAP
                </option>
                <option
                  className="header__time-deliver-choice"
                  value="later"
                >
                  Later
                </option>
              </select>
            </div>
          </form>
        </div>
      </>
    );
  }
}

LocationAndTime.propTypes = {
  locationValue: propTypes.string.isRequired,
  onHandlerChangeLocation: propTypes.func.isRequired,
  onClearLocation: propTypes.func.isRequired,
};

export default LocationAndTime;
