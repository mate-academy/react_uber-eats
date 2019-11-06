import React, { Component } from 'react';
import './Header.scss';
import { Input } from '../Input/Input';

export const tra = 'tra';

export class Header extends Component {
  state = {
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
              type="time"
            />

            <Input
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/Search.svg"
              className="header__search"
            />
            <a
              className="header__link"
              href="/sign-in"
            >
                Sign in
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
}
