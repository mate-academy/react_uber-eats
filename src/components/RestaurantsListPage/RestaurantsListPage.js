import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

const DEFAULT_ETA_RANGE = '20 30 min';

export const RestaurantsListPage = (props) => {
  const { restaurantsData, isLoading, loadingError, loadRestaurants } = props;

  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  if (isLoading) {
    return <Loader />;
  }

  if (loadingError) {
    return <Error message={loadingError} />;
  }

  return (
    <div className="restaurants-list">
      {restaurantsData.map((restaurant) => {
        const {
          uuid,
          title,
          heroImageUrl,
          categories,
          etaRange,
        } = restaurant;

        return (
          <RestaurantCard
            key={uuid}
            title={title}
            imageUrl={heroImageUrl}
            categories={categories}
            etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
          />
        );
      })}
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  loadingError: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  loadingError: null,
  isLoading: false,
};
