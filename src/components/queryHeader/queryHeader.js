import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { setActivateQuery } from '../../store/actions';
import { iconSearch } from '../../icons';

const QueryHeader = ({ queryIsActive, activateQuery }) => (
  <>
    {queryIsActive ? (
      <div className="search__query_field">
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
          className="search__restaurant"
          onClick={() => activateQuery(false)}
          onKeyDown={() => activateQuery(false)}
          role="searchbox"
          tabIndex="0"
        >
          {iconSearch}
        </div>

      </div>
    ) : (
      <div
        className="search__restaurant"
        onClick={() => activateQuery(true)}
        onKeyDown={() => activateQuery(true)}
        role="searchbox"
        tabIndex="0"
      >
        {iconSearch}
      </div>
    )}
  </>
);

const mapState2Props = state => ({
  queryIsActive: state.queryIsActive,
});

const mapDispatch2Props = ({
  activateQuery: setActivateQuery,
});

QueryHeader.propTypes = {
  queryIsActive: PropTypes.bool.isRequired,
  activateQuery: PropTypes.func.isRequired,
};
export default connect(mapState2Props, mapDispatch2Props)(QueryHeader);
