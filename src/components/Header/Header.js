import React, { Component } from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export default class Header extends Component {

  state = {
    address: ``,
    time: ``,
    search: ``,
    isMobileSearchVisible: false,
    isMobileInfoVisible: false,
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,

    })
  }

  toggleSearch = () => {
    this.setState(({isMobileSearchVisible}) => ({
      isMobileSearchVisible: !isMobileSearchVisible,
      isMobileInfoVisible: false,
    }));
  }

  toggleInfo = () => {
    this.setState(({isMobileInfoVisible}) => ({
      isMobileInfoVisible: !isMobileInfoVisible,
      isMobileSearchVisible: false,
    }));
  }

  closeMobile = () => {
    this.setState({isMobileSearchVisible: false,  isMobileInfoVisible: false,})
  }

  render() {

    const {
      address,
      time,
      search,
      isMobileSearchVisible,
      isMobileInfoVisible
    } = this.state;

    return(
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/Logo.svg" alt="Uber Eats" className="header__logo"/>
            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                value={address}
                placeholder="Address"
                iconURL="./images/address.svg"
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
                  iconURL="./images/search.svg"
                />
              </div>
              <div className="header__toggle-buttons">
                <button
                  className="header__toggle-btn"
                  type="button"
                  onClick={this.toggleInfo}
                >
                  <img
                    src="./images/address.svg"
                    alt="place icon"
                  />
                </button>
                <button
                  className="header__toggle-btn"
                  type="button"
                  onClick={this.toggleSearch}
                >
                  <img
                    src="./images/search.svg"
                    alt="search icon"
                  />
                </button>
              </div>
            <a className="header__link" href="/sign-in">Sign In</a>
          </div>
          {(isMobileSearchVisible || isMobileInfoVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  name="search"
                  label="search"
                  onChange={this.handleChange}
                  value={search}
                  placeholder="Search"
                  iconURL="./images/search.svg"
                  isSmall={false}
                />
              )}
              {isMobileInfoVisible && (
                <>
                  <Input
                    name="address"
                    label="where"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Address"
                    iconURL="./images/address.svg"
                    isSmall={false}
                  />
                  <Input
                    name="time"
                    label="to"
                    onChange={this.handleChange}
                    value={time}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                  />
                </>
              )}

              <button
                  className="mobile-controls__close"
                  type="button"
                  onClick={this.closeMobile}
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
