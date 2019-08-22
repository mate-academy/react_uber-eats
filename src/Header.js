import React from 'react';

const Header = () => (
  <header className="header" id="header">
    <div className="header__container">
      <a href="/#" className="header__logo">
        <img
          src="img/uber__eats__logo.png"
          alt="Uber eats"
        />
      </a>
      <form action="/" className="adress-delivery adress-delivery__header">
        <div className="search__container ">
          <button
            type="button"
            className="dest_btn abs_btn"
          >
            <img src="img/local.svg" alt="location" className="dest_btn__img" />
          </button>
          <input
            type="text"
            className="destination_input dest_style"
            placeholder="ul. Tarasivska St, 16"
          />
        </div>

        <div htmlFor="destination-details" className="adress-delivery__bts">
          <img src="img/time.png" alt="location" />
          <select
            name=""
            id="destination-details"
            className="adress-delivery__destination-details"
          >
            <option value="ASAP">Delivery now</option>
            <option value="ASAP">Schedule for later</option>
          </select>
        </div>
      </form>
      <div className="sign-delivery-and-basket-container">
        <div className="search_container">
          <img className="dest_btn__img" alt="search" src="img/search.svg" />
          <input
            type="text"
            className="search_input"
            placeholder="Search for restaurant or cuisine"
          />
        </div>
        <div className="sign-delivery">
          <a
            href="/#"
            className="sign-delivery__button sign-delivery__button__sign-in"
          >
          Sign in
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
