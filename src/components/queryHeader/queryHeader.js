import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import connect from 'react-redux/es/connect/connect';
import { changeQuery, setActivateQuery } from '../../store/actions';
import { iconSearch } from '../../icons';

const QueryHeader = ({ queryIsActive, activateQuery, setQuery2redux }) => {
  const [visibleQuery, setVisibleQuery] = useState('');

  const debouncedQuery = debounce(setQuery2redux, 500);

  const handlerQuery = (event) => {
    setVisibleQuery(event.target.value);
    debouncedQuery(event.target.value);
  };

  return (
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
              value={visibleQuery}
              onChange={handlerQuery}
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
};

const mapState2Props = state => ({
  queryIsActive: state.queryIsActive,
  query: state.query,
});

const mapDispatch2Props = ({
  activateQuery: setActivateQuery,
  setQuery2redux: changeQuery,
});

QueryHeader.propTypes = {
  queryIsActive: PropTypes.bool.isRequired,
  activateQuery: PropTypes.func.isRequired,
  setQuery2redux: PropTypes.func.isRequired,
};
export default connect(mapState2Props, mapDispatch2Props)(QueryHeader);
