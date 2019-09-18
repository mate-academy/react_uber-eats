/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header_N.scss';
// import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="n__header">
        <div className="n__header__wrap__logo">
          <NavLink
            to="/"
            exact
          >
            <img
              src="img/uber__eats__logo.png"
              alt="logo"
              className="n__header__logo"
            />
          </NavLink>
        </div>
        <div className="n__header__container__deliverry">
          <form action="search" className="n__header__form3 n__header__form">
            <div className="n__header__inner">
              <img
                src="img/local.svg"
                alt="local"
                className="n__header__local_img"
              />
              <input
                name="search"
                type="text"
                className="n__header__input"
                placeholder="search"
              />
              <button className="n__header__clear n__header__button" disabled>
                Clear
              </button>
              <div className="n__header__bulkhead" />
              <button
                type="button"
                className="n__header__close n__header__button"
                disabled
              >
                <img src="img/local.svg" alt="img__local" />

              </button>
            </div>
          </form>
          <div className="n__header__adress-delivery__bts">
            <img src="img/time.png" alt="location" />
            <select
              name=""
              id="destination-details"
              className="n__header__adress-delivery__destination-details"
            >
              <option value="ASAP">Delivery now</option>
              <option value="ASAP">Schedule for later</option>
            </select>
          </div>
        </div>
        <div className="n__header__search__container ">
          <button
            type="button"
            className="n__header__dest_btn n__header__abs_btn"
          >
            <img
              src="img/search.svg"
              alt="location"
              className="dest_btn__img"
            />
          </button>
          <input
            type="text"
            className="n__header__destination_input n__header__dest_style"
            placeholder="ul. Tarasivska St, 16"
          />
        </div>
        <div className="n__header__container__search">
          <form
            action="n__header__search n__header__search__hidden"
            className="n__header__form n__header__form__hiden"
          >
            <div className="n__header__inner">
              <img
                src="img/search.svg"
                className="n__header__search_img"
                alt="search_Picture"
              />
              <input
                name="search"
                type="text"
                className="n__header__input"
                placeholder="search"
              />
              <button className="n__header__clear n__header__button" disabled>
                Clear
              </button>
              <div className="n__header__bulkhead" />
              <button
                type="button"
                className="n__header__close n__header__button"
                disabled
              >
                <img src="img/local.svg" alt="img__local" />

              </button>
            </div>
          </form>
          <div className="n__header__sign-delivery">
            <NavLink
              to="/"
              exact
              className="n__header__sign-delivery__button
                n__header__sign-delivery__button__sign-in"
            >
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {
//   stores: PropTypes.objectOf(
//     PropTypes.number,
//   ).isRequired,
// };

export default Header;
