import React, { Component } from 'react';

import { Input } from '../Input/Input';
import './Header.scss';

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
    const { address, time, search } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/Logo.svg" alt="uber eats logo" />

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

            <Input
              name="search"
              onChange={this.handleChange}
              value={search}
              placeholder="Search"
              iconUrl="./images/Search.svg"
              className="header__search"
            />

            <a href="/sign-in" className="header__link">Sign In</a>
          </div>
        </div>
      </header>
    );
  }
}
