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
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15.7859L11.2392 11.4636C13.5869 9.06988 13.5869 5.18495 11.2392 2.79123C8.89684 0.402923 5.10316 0.402923 2.76077 2.79123C0.413075 5.18495 0.413075 9.06988 2.76077 11.4636L7 15.7859Z" stroke="#262626"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#262626"/>
                  </svg>
                </button>
                <button
                  className="buttons__btn"
                  onClick={toggleSearch}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9217 11.0417L15 15M12.8788 6.76471C12.8788 9.94847 10.2196 12.5294 6.93939 12.5294C3.65916 12.5294 1 9.94847 1 6.76471C1 3.58095 3.65916 1 6.93939 1C10.2196 1 12.8788 3.58095 12.8788 6.76471Z" stroke="black" stroke-width="2"/>
                  </svg>
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
