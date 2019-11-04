import React, { Component } from 'react';

import './Header.scss';
import { Input } from '../Input/Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

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
            <img src="./images/Logo_uber.svg" alt="Uber Eats" />

            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                value={address}
                placeholder="Address"
                iconUrl="./images/input.svg"
              />
              <Input
                name="time"
                onChange={this.handleChange}
                value={time}
                placeholder="Time"
                type="time"
              />
            </div>

            <Input
              name="search"
              onChange={this.handleChange}
              value={search}
              placeholder="Search"
              iconUrl="./images/search.svg"
              className="header__search"
            />

            <a
              className="header__link"
              href="./sign-in"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
}
