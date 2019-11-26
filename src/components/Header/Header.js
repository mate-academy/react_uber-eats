import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Input } from '../Input/Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState((prevState) => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileSearchVisible: false,
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
    };
  });

  closeMobile = () => this.setState({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  render() {
    const {
      address,
      time,
      search,
      isMobileSearchVisible,
      isMobileDeliveryInfoVisible,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              src="./images/logo.svg"
              alt="Uber Eats"
              className="header__logo"
            />
            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="Address"
                iconUrl="./images/place.svg"
              />
              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>
            <div className="header__search">
              <Input
                name="search"
                value={search}
                onChange={this.handleChange}
                placeholder="Search"
                iconUrl="./images/search.svg"
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                onClick={this.toggleDeliveryInfo}
                type="button"
                className="header__toggle-btn"
              >
                <img
                  src="./images/place.svg"
                  alt="place icon"
                />
              </button>
              <button
                onClick={this.toggleSearch}
                type="button"
                className="header__toggle-btn"
              >
                <img
                  src="./images/search.svg"
                  alt="search icon"
                />
              </button>
            </div>

            <a
              className="header__link"
              href="/sign-in"
            >
              Sign In
            </a>
          </div>
          { (isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              { isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}

              { isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                    isSmall={false}
                  />
                  <Input
                    label="To"
                    name="time"
                    value={time}
                    onChange={this.handleChange}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                  />
                </>
              )}

              <button
                onClick={this.closeMobile}
                type="button"
                className="mobile-controls__close"
              >
                <img
                  src="./images/close.svg"
                  alt="search icon"
                />
              </button>
            </div>
          )}
        </div>

      </header>
    );
  }
}
