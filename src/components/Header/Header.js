import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Header.scss';
import { Input } from '../Input';

// eslint-disable-next-line import/prefer-default-export
export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector('.header');

    window.scrollY > 10
      ? header.classList.add('header--shadow')
      : header.classList.remove('header--shadow');
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryInfoVisible: false,
  }))

  toggleDeliveryInfo = () => this.setState(({ isMobileDeliveryInfoVisible }) => ({
    isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
    isMobileSearchVisible: false,
  }))

  closeMobile = () => {
    this.setState({
      isMobileDeliveryInfoVisible: false,
      isMobileSearchVisible: false,
    });
  }

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
            <Link to="/">
              <img
                className="header__logo"
                src="./images/logo.svg"
                alt="Uber Eats"
              />
            </Link>
            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                value={address}
                placeholder="Address"
                iconUrl="./images/place.svg"
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
            <a href="/sign-in" className="header__link">
              Sign In
            </a>
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
                  iconUrl="./images/search.svg"
                  className="header__search-mobile"
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
                    iconUrl="./images/place.svg"
                    className="mobile-controls--is-big"
                    isSmall={false}
                  />
                  <Input
                    label="To"
                    name="time"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Time"
                    type="time"
                    className="mobile-controls--is-big"
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
                  src="./images/cross.svg"
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
