/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Header.scss';
import Input from '../Input/Input';

class Header extends Component {
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
                onChange={this.handleChange}
                value={address}
                placeholder="Addresss"
                iconUrl="./images/place.svg"
              />
              <Input
                name="time"
                onChange={this.handleChange}
                value={time}
                placeholder=""
                type="time"
              />
              <Input
                name="search"
                onChange={this.handleChange}
                value={search}
                placeholder="Search"
                iconUrl="./images/search.svg"
                className="header__search"
              />
              <a className="header__link" href="/sign-in">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
