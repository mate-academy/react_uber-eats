import React, { Component } from 'react';
import './Header.scss';
import Input from '../Input/Input';

class Header extends Component {
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

  toggleDeliveryInfo = () => this.setState(({ isMobileDeliveryInfoVisible }) => ({
    isMobileSearchVisible: false,
    isMobileDeliveryInfoVisible: !isMobileDeliveryInfoVisible,
  }));

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
              src="./images/Logo.svg"
              alt="Uber Eats"
              className="header__logo"
            />

            <div className="header__delivery-info">
              <Input
                onChange={this.handleChange}
                value={address}
                name="address"
                placeholder="Address"
                iconUrl="./images/place.svg"
              />
              <Input
                onChange={this.handleChange}
                value={time}
                name="time"
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                onChange={this.handleChange}
                value={search}
                name="search"
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
              href="/sing-in"
            >
              Sing In
            </a>
          </div>

          {(isMobileSearchVisible || isMobileDeliveryInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  onChange={this.handleChange}
                  value={search}
                  name="search"
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                />
              )}

              {isMobileDeliveryInfoVisible && (
                <>
                  <Input
                    onChange={this.handleChange}
                    value={address}
                    name="address"
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                    isSmall={false}
                    label="Where"
                  />
                  <Input
                    label="To"
                    onChange={this.handleChange}
                    value={time}
                    name="time"
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

Header.propTypes = {

};

export default Header;
