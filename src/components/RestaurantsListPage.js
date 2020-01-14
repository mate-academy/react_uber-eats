import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RestaurantCard from './RestaurantCard';
import {
  loadData, getRestaurants, getIsLoading, getError,
} from '../store/store';
import '../styles/RestaurantsList.scss';
import Loader from './Loader';
import Error from './Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

const RestaurantsListPage = ({
  restaurants, loadDataFromServer, isLoading, error,
}) => {
  useEffect(() => {
    loadDataFromServer();
  }, [loadDataFromServer]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="restaurants-list">
      {restaurants.map((
        { heroImageUrl, title, categories, etaRange, uuid },
      ) => (
        <RestaurantCard
          key={uuid}
          title={title}
          categories={categories}
          etaRange={etaRange.errorMessage
            ? etaRange.errorMessage
            : DEFAULT_ETA_RANGE}
          uuid={uuid}
          imageUrl={heroImageUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: getRestaurants(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapMethodsToProps = {
  loadDataFromServer: loadData,
};

RestaurantsListPage.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  loadDataFromServer: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurants: [],
  error: null,
  isLoading: false,
};

export default connect(mapStateToProps, mapMethodsToProps)(RestaurantsListPage);
