import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';
import './Header.scss';

export class Header extends React.Component {
  state = {
    address: '',
    time: '',
    search: '',
    isSearchVisible: false,
    isDeliveryInfoVisible: false,
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  toggleSearch = () => this.setState(prevState => ({
    isSearchVisible: !prevState.isSearchVisible,
    isDeliveryInfoVisible: false,
  }));

  toggleDeliveryInfo = () => this.setState(prevState => ({
    isDeliveryInfoVisible: !prevState.isDeliveryInfoVisible,
    isSearchVisible: false,
  }));

  closeMobileInfo = () => this.setState({
    isDeliveryInfoVisible: false,
    isSearchVisible: false,
  });

  render() {
    const {
      address,
      time,
      search,
      isSearchVisible,
      isDeliveryInfoVisible,
    } = this.state;

    const {
      handleChange,
      toggleSearch,
      toggleDeliveryInfo,
      closeMobileInfo,
    } = this

    return (
      <header className="header">
        <div>
          <div className="container header__container">
            <a href="/">
              <img
                src="./img/Logo.svg"
                alt="Uber Eats"
                className="header__logo"
              />
            </a>
            <div className="header__delivery-info">
              <Input
                icon="./img/Place.svg"
                onChange={handleChange}
                name="address"
                placeholder="Address"
                value={address}
              />
              <Input
                onChange={handleChange}
                name="time"
                type="time"
                placeholder="Time"
                value={time}
                />
            </div>
            <div className="header__wrapper">
              <Input
                icon="./img/Search.svg"
                onChange={handleChange}
                name="search"
                placeholder="Search"
                value={search}
              />
              <div className="header__buttons buttons">
                <button
                  className="buttons__btn"
                  onClick={toggleDeliveryInfo}
                >
                  <img
                    src="./img/Place.svg"
                    alt="place icon"
                  />
                </button>
                <button
                  className="buttons__btn"
                  onClick={toggleSearch}
                >
                  <img
                    src="./img/Search.svg"
                    alt="search icon"
                  />
                </button>
              </div>
              <a
                href="/sign-in"
                className="header__link"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div>
          {(isSearchVisible || isDeliveryInfoVisible) && (
            <div className="container header__container">
              <div className="header__delivery-info-mobile">
                {isSearchVisible && (
                  <Input
                    icon="./img/Search.svg"
                    onChange={handleChange}
                    name="search"
                    placeholder="Search"
                    value={search}
                  />
                )}
                {isDeliveryInfoVisible && (
                  <div className="input__wrapper">
                    <div className="input-container">
                      <p className="input-container__text">To</p>
                      <Input
                        onChange={handleChange}
                        name="time"
                        type="time"
                        placeholder="Time"
                        value={time}
                      />
                    </div>
                    <div className="input-container">
                      <p className="input-container__text">When</p>
                      <Input
                        icon="./img/Place.svg"
                        onChange={handleChange}
                        name="address"
                        placeholder="Address"
                        value={address}
                      />
                    </div>
                  </div>
                )}
              </div>
              <button
                className="buttons__close"
                onClick={closeMobileInfo}
              >
                <img
                  src="./img/close-icon.svg"
                  alt="Close"
                />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}
