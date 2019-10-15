import React, { Component } from 'react';
import Input from '../Input';
import './Header.scss';

export class Header extends Component {
  state={
    address: '',
    time: '',
    search: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const {
      address,
      time,
      search,
    } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="Uber Eats" />

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
                iconUrl=""
                type="time"
              />
            </div>

            <Input
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/search.svg"
              className="header__search"
            />

            <div className="header__toogle-buttons">
              <button type="button" className="header__toogle-btn">
                <img
                  src="./images/place.svg"
                  alt="place icon"
                  className="control__icon"
                />
              </button>
              <button type="button" className="header__toogle-btn">
                <img
                  src="./images/search.svg"
                  alt="search icon"
                  className="control__icon"
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
        </div>
      </header>
    );
  }
}
