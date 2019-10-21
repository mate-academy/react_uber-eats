/* eslint-disable max-len */
import React from 'react';

const Header = () => (
  <div className="header__container">
    <a className="header__logo" href="/">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
        alt="logo"
      />
    </a>

    <div className="header__location-delivery-block">
      <div className="header__location">
        <div className="wrapper">
          <form action="search" className="form3 form">
            <div className="inner">
              <input
                name="search"
                type="text"
                className="input"
                placeholder="London"
              />
              <button type="button" className="clear" disabled>
                Clear
              </button>
              <div className="bulkhead" />
              <button type="button" className="close" disabled>
                <svg
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="header__delivery-time">
        <div className="wrapper">
          <form action="search" className="form2 form">
            <div className="inner">
              <input
                name="search"
                type="text"
                className="input"
                placeholder="Delivery now"
              />
              <button type="button" className="clear" disabled>
                Clear
              </button>
              <div className="bulkhead" />
              <button type="button" className="close" disabled>
                <svg
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="header__search">
      <div className="wrapper">
        <form action="search" className="form1 form">
          <div className="inner">
            <input
              name="search"
              type="text"
              className="input"
              placeholder="search"
            />
            <button type="button" className="clear" disabled>
              Clear
            </button>
            <div className="bulkhead" />
            <button type="button" className="close" disabled>
              <svg
                style={{ width: '24px', height: '24px' }}
                viewBox="0 0 24 24"
              >
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    <a className="header__sign-in" href="/##">
      Sign in
    </a>
  </div>
);

export default Header;
