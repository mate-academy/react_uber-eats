/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export const tra = 'tra';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  }

handleChange = ({ target }) => {
  this.setState({
    [target.name]: target.value,
  });
}

toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
  isMobileSearchVisible: !isMobileSearchVisible,
  isMobileDeliveryInfoVisible: false,
}));

toggleDeliveryInfo = () => this.setState((prevState) => {
  const { isMobileDeliveryInfoVisible } = prevState;

  return {
    isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
    isMobileSearchVisible: false,
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
          <a href="#">
            <img
              src="./images/logo.svg"
              alt="Uber Eats"
              className="header__logo"
            />
          </a>
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
              iconUrl="./images/Search.svg"
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
                className="place__icon"
              />
            </button>
            <button
              onClick={this.toggleSearch}
              type="button"
              className="header__toggle-btn"
            >
              <img
                src="./images/Search.svg"
                alt="search icon"
                className="search__icon"
              />
            </button>
          </div>
          <a
            className="header__link"
            href="/sign-in"
          >
                Sign in
          </a>

        </div>
        {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
          <div className="header__mobile-controls mobile-controls ">
            {isMobileSearchVisible && (
              <Input
                label="Find"
                name="search"
                value={search}
                onChange={this.handleChange}
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
                className="search__icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
}
