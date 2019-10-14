import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import './Header.scss';

export class Header extends PureComponent {
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

  toogleSearch = () => {
    this.setState(prevState => ({
      isMobileSearchVisible: !prevState.isMobileSearchVisible,
      isMobileDeliveryInfoVisible: false,
    }));
  }

  toogleDeliveryInfo = () => {
    this.setState(prevState => ({
      isMobileDeliveryInfoVisible: !prevState.isMobileDeliveryInfoVisible,
      isMobileSearchVisible: false,
    }));
  }

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
                src="./images/LogoHeader.svg"
                alt="UberEats"
                className="header__logo"
              />
            </Link>
            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                placeholder="Address"
                iconUrl="./images/locationImg.svg"
                onChange={this.handleChange}
              />
              <Input
                name="time"
                type="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
              />
            </div>
            <Input
              className="header__search"
              name="search"
              value={search}
              placeholder="Search"
              onChange={this.handleChange}
              iconUrl="./images/headerSearchIcon.svg"
            />
            <div className="header__toogle-buttons">
              <button
                type="button"
                className="header__toogle-btn"
                onClick={this.toogleDeliveryInfo}
              >
                <img
                  src="./images/locationImg.svg"
                  alt="search icon"
                />
              </button>
              <button
                type="button"
                className="header__toogle-btn"
                onClick={this.toogleSearch}
              >
                <img
                  src="./images/headerSearchIcon.svg"
                  alt="place icon"
                />
              </button>
            </div>
            <a className="header__link" href="##">
              Sign In
            </a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  placeholder="Search"
                  onChange={this.handleChange}
                  iconUrl="./images/headerSearchIcon.svg"
                  isSmall={false}
                />
              )}
              {isMobileDeliveryInfoVisible && (
              <>
                <Input
                  label="Where"
                  name="time"
                  type="time"
                  value={time}
                  onChange={this.handleChange}
                  placeholder="Time"
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="address"
                  value={address}
                  placeholder="Address"
                  iconUrl="./images/locationImg.svg"
                  onChange={this.handleChange}
                  isSmall={false}
                />
              </>
              )}
              <button
                type="button"
                className="mobile-controls__close"
                onClick={this.closeMobile}
              >
                <img
                  src="./images/headerCross.svg"
                  alt="close"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}
