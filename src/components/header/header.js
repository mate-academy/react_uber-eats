import React, { useState, useEffect } from 'react';
import './header.scss';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { logo, iconAddress, iconSearch } from '../../icons';
import SearchAddressInMobile
  from '../searchAddressInMobile/searchAddressInMobile';
import { changeQuery } from '../../store/actions';

const Header = ({ setQuery2redux }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [visibleQuery, setVisibleQuery] = useState('');

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const debouncedQuery = debounce(setQuery2redux, 500);
  const handlerQuery = (event) => {
    setVisibleQuery(event.target.value);
    debouncedQuery(event.target.value);
  };

  return (
    <>
      { width < 1279 ? (
        <>
          <SearchAddressInMobile />
        </>
      ) : (
        <div className="header__search search">
          <Link to="/">
            {logo}
          </Link>
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
              value={visibleQuery}
              onChange={handlerQuery}
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

const mapState2Props = state => ({
  query: state.query,
});

const mapDispatch2Props = ({
  setQuery2redux: changeQuery,
});

Header.propTypes = {
  setQuery2redux: PropTypes.func.isRequired,
};

export default connect(mapState2Props, mapDispatch2Props)(Header);
