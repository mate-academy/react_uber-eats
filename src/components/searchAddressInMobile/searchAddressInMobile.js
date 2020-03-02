import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { iconAddress, logo } from '../../icons';
import { setSearchAddress } from '../../store/actions';
import QueryHeader from '../queryHeader/queryHeader';

const SearchAddressInMobile = ({ searchAddress, address, queryIsActive }) => (
  <>
    {address ? (
      <>
        <div className="header__search search">
          <h1>
            {logo}
          </h1>
          <div className="search__icons_for_mobile">

            <div
              onClick={() => searchAddress(false)}
              onKeyDown={() => searchAddress(false)}
              role="button"
              tabIndex="0"
              className="search__address"
            >
              {iconAddress}
            </div>

            <QueryHeader />

            <div
              className={queryIsActive ? `non-active` : `search__sign_in`}
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
          <div
            className="close"
            onClick={() => searchAddress(false)}
            onKeyDown={() => searchAddress(false)}
            role="button"
            tabIndex="0"
          />
        </div>
      </>
    ) : (
      <div className="header__search search">
        <h1>
          {logo}
        </h1>
        <div className="search__icons_for_mobile">

          <div
            onClick={() => searchAddress(true)}
            className="search__address"
            onKeyDown={() => searchAddress(true)}
            role="button"
            tabIndex="0"
          >
            {iconAddress}
          </div>
          <QueryHeader />
          <div
            className={queryIsActive ? `non-active` : `search__sign_in`}
          >
            Sign in
          </div>
        </div>

      </div>
    )}
  </>
);

const mapState2Props = state => ({
  address: state.address,
  queryIsActive: state.queryIsActive,
});

const mapDispatch2Props = ({
  searchAddress: setSearchAddress,
});

SearchAddressInMobile.propTypes = {
  searchAddress: PropTypes.func.isRequired,
  address: PropTypes.bool.isRequired,
  queryIsActive: PropTypes.bool.isRequired,
};

export default connect(
  mapState2Props, mapDispatch2Props
)(SearchAddressInMobile);
