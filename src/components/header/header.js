import React, { useState, useEffect } from 'react';
import './header.scss';
import { logo, iconAddress, iconSearch } from '../../icons';
import SearchAddressInMobile
  from '../searchAddressInMobile/searchAddressInMobile';

// eslint-disable-next-line react/prop-types
const Header = ({ address, setAddress }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      { width < 1279 ? (
        <SearchAddressInMobile
          address={address}
          setAddress={setAddress}
        />
      ) : (
        <div className="header__search search">
          <h1>
            {logo}
          </h1>
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

          <div className="search__delivery_time ">
            <input
              className="search__input"
              type="time"
            />
          </div>

          <div
            className="search__query_dish"
          >
            {iconSearch}
            <input
              type="text"
              className="search__input"
              placeholder="Search"
            />
          </div>
          <div
            className="search__sign_in"
          >
          Sign in
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
