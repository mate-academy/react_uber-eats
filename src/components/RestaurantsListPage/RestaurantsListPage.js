import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantsListPage = ({
  restaurantsData,
  loadRestaurants,
  error,
  isLoading,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
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
            uuid={uuid}
            imageUrl={heroImageUrl}
            title={title}
            categories={categories}
            etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
          />
        );
      })}
    </div>
  );
};

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    etaRange: PropTypes.string,
  })),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
};
