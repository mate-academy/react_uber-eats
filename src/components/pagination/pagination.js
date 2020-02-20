import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { setCurrentNumber } from '../../store/actions';

const Pagination = (
  { restaurantsPerPage,
    totalRestaurants,
    currentPage,
    setPage }
) => {
  const pageNumbers = [];

  const numberPages = Math.ceil(totalRestaurants / restaurantsPerPage);

  for (let i = 1; i <= numberPages; i += 1) {
    pageNumbers.push(i);
  }

  const paginate = num => setPage(num);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(pageNumber => (
          <li
            key={pageNumber}
            className="pagination__item"
          >
            <a
              onClick={() => paginate(pageNumber)}
              href="!#"
              className={pageNumber === currentPage
                ? 'pagination__link pagination__active'
                : 'pagination__link'}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapState2Props = state => ({
  currentPage: state.currentPage,
  restaurantsPerPage: state.restaurantsPerPage,
  totalRestaurants: state.totalRestaurants,
});

const mapDispatch2Props = ({
  setPage: setCurrentNumber,
});

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number,
  totalRestaurants: PropTypes.number,
  currentPage: PropTypes.number,
  setPage: PropTypes.func,
};

Pagination.defaultProps = {
  restaurantsPerPage: null,
  totalRestaurants: null,
  currentPage: null,
  setPage: null,
};

export default connect(mapState2Props, mapDispatch2Props)(Pagination);
