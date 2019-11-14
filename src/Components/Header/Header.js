import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../Input/Input';
import './Header.scss';

export class Header extends React.Component {
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
    const { address,
      time,
      search,
    } = this.state;

    return (
      <header className="header">
        <div className="container header__container">
          <img src="./img/Logo.svg" alt="Uber Eats"/>
          <div className="header__delivery-info">
          <Input
            icon="./img/Place.svg"
            onChange={this.handleChange}
            name="address"
            placeholder="Address"
            value={address}
          />
          <Input
            onChange={this.handleChange}
            name="time"
            type="time"
            placeholder="Time"
            value={time}
            />
          </div>
          <div className="header__wrapper">
            <Input
              icon="./img/Search.svg"
              onChange={this.handleChange}
              name="search"
              placeholder="Search"
              value={search}
            />
            <a
              href="/sign-in"
              className="header__link"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
}
