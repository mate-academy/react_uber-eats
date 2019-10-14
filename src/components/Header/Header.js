/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';

import { Input } from '../Input/Input';
import './Header.scss';

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

  toggleClose = () => this.setState({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  });

  toggleDeliveryInfo = () => this.setState((prevState) => {
    const { isMobileDeliveryInfoVisible } = prevState;

    return {
      isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    };
  });

  render() {
    const {
      address,
      time,
      search,
      isMobileDeliveryInfoVisible,
      isMobileSearchVisible,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              className="header__logo"
              src="./images/Logo.svg"
              alt="uber eats logo"
            />

            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                value={address}
                placeholder="Address"
                iconUrl="./images/Location.svg"
              />
              <Input
                name="time"
                onChange={this.handleChange}
                value={time}
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                onChange={this.handleChange}
                value={search}
                placeholder="Search"
                iconUrl="./images/Search.svg"
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleDeliveryInfo}
              >
                <img
                  src="./images/Location.svg"
                  alt="place icon"
                />
              </button>
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/Search.svg"
                  alt="search icon"
                />
              </button>
            </div>

            <a href="/sign-in" className="header__link">Sign In</a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  onChange={this.handleChange}
                  value={search}
                  placeholder="Search"
                  iconUrl="./images/Search.svg"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Address"
                    iconUrl="./images/Location.svg"
                  />
                  <Input
                    label="To"
                    name="time"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Time"
                    type="time"
                  />
                </>
              )}
              <button
                type="button"
                className="mobile-controls__close"
                onClick={this.toggleClose}
              >
                <img
                  src="./images/close.svg"
                  alt="close icon"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}
