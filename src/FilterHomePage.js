import React from 'react';
import propTypes from 'prop-types';
import './styles/filter.scss';

class FilterHomePage extends React.Component {

  render() {
    const { filterValue, onHandlerFilter } = this.props;

    return (
      <div className="filter filter--mobile">
        <form className="filter__form">
          <div className="filter__container">
            <div className="header__svg">
              <img src="./images/search.svg" alt="filter" />
            </div>
            <input
              className="filter__input "
              id="filter-search"
              value={filterValue}
              onChange={onHandlerFilter}
              placeholder="Search"
            />

            <button
              className="filter__close filter__btn"
              type="button"
              disabled
            >
              <img src="./images/button_close.svg" alt="close" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FilterHomePage.propTypes = {
  filterValue: propTypes.string.isRequired,
  onHandlerFilter: propTypes.func.isRequired,
};

export default FilterHomePage;
