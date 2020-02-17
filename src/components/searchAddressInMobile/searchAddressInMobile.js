import React from 'react';
import { iconAddress, iconSearch, logo } from '../../icons';

// eslint-disable-next-line react/prop-types
const SearchAddressInMobile = ({ address, setAddress }) => (
  <>
    {address ? (
      <>
        <div className="header__search search">
          <h1>
            {logo}
          </h1>
          <div className="search__icons_for_mobile">
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
              onClick={() => setAddress(false)}
              className="search__address"
            >
              {iconAddress}
            </div>
            <div className="search__restaurant">
              {iconSearch}
            </div>
            <div
              className="search__sign_in"
            >
              Sign in
            </div>
          </div>
        </div>
        <div className="search__address--active">

          <div className="search__delivery_time ">
            <input
              className="search__input"
              type="time"
            />
          </div>
          <div
            className="search__query_address"
          >
            {iconAddress}
            <input
              type="text"
              className="search__input"
              placeholder="Address"
            />
          </div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className="close"
            onClick={() => setAddress(false)}
          />
        </div>
      </>
    ) : (
      <div className="header__search search">
        <h1>
          {logo}
        </h1>
        <div className="search__icons_for_mobile">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => setAddress(true)}
            className="search__address"
          >
            {iconAddress}
          </div>
          <div className="search__restaurant">
            {iconSearch}
          </div>
          <div
            className="search__sign_in"
          >
            Sign in
          </div>
        </div>

      </div>
    )}

  </>
);

export default SearchAddressInMobile;
