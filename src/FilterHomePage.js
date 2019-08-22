import React from 'react';
import propTypes from 'prop-types';
import './styles/filter.scss';

class FilterHomePage extends React.Component {
  state = {
    filterChoice: false,
  };

  handlerChoiceFilter = () => {
    this.setState(state => ({
      filterChoice: !state.filterChoice,
    }));
  };

  render() {
    const { filterChoice } = this.state;
    const { filterValue, onHandlerFilter } = this.props;

    return (
      <div className="filter filter--mobile">
        <button
          type="button"
          onClick={this.handlerChoiceFilter}
          className={filterChoice
            ? 'filter__search filter__search--hidden'
            : 'filter__search'}
        >
          <div className="header-svg">
            <img src="./images/search.svg" alt="search" />
          </div>
          <div className="filter__name">
            Search
          </div>
        </button>
        <form className={filterChoice
          ? 'filter__search filter__search--form'
          : 'filter__search filter__search--hidden'}
        >
          <div className="header-svg">
            <img src="./images/search.svg" alt="location" />
          </div>
          <label
            htmlFor="filter-search"
            className="filter__input"
          >
            <input
              className="filter__input"
              id="filter-search"
              value={filterValue}
              onChange={onHandlerFilter}
              placeholder="What are you craving?"
            />
          </label>
          <button
            className="filter__close"
            type="button"
            onClick={this.handlerChoiceFilter}
          >
            <img src="./images/button_close.svg" alt="close" />
          </button>
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
