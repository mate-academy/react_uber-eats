import React, { Component } from 'react';
import Input from '../Input/Input';
import './Header.scss';

class Header extends Component {
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
                type="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
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
            <a
              className="header__link"
              href="/sign-in"
            >
            Sigh In
            </a>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
