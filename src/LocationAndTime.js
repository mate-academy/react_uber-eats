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
    const { locationChoice } = this.state;
    const {
      locationValue,
      onHandlerChangeLocation,
      onClearLocation,
    } = this.props;

    return (
      <>
        <div className="header-location">
          <span className="main__header-description">When</span>
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
                onChange={onHandlerChangeLocation}
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
          <span className="main__header-description">To</span>
          <label
            htmlFor="time-deliver"
            className="header-time__deliver"
          >
            <img
              src="./images/clock.svg"
              className="header-svg"
              alt="time"
            />
            <select
              id="time-deliver"
              className="header-time__deliver-choice"
            >
              <option
                className="header-time__deliver-choice"
                value="now"
                selected
              >
                Deliver now
              </option>
              <option
                className="header-time__deliver-choice"
                value="later"
              >
                Schedule for later
              </option>
            </select>
          </label>
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
