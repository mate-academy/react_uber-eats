/* eslint-disable react/button-has-type */
import React from 'react';
import './Restorant.scss';
import PropTypes from 'prop-types';

const Restorants = ({ stores }) => (
  <div className="n__header">
    <header className="n__header__wrapp">
      <div className="n__header__wrap__logo">
        <img
          src="img/uber__eats__logo.png"
          alt="logo"
          className="n__header__logo"
        />
      </div>
      <div className="n__header__container__delivery">
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
      <div className="n__header__container__serch">
        <form action="search" className="n__header__form3 n__header__form">
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
          <a
            href="/#"
            className="n__header__sign-delivery__button
            n__header__sign-delivery__button__sign-in"
          >
          Sign in
          </a>
        </div>
      </div>
    </header>
  </div>
);

Restorants.propTypes = {
  stores: PropTypes.objectOf(
    PropTypes.number,
  ).isRequired,
};

export default Restorants;
