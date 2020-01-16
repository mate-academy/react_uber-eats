import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadRestaurants } from '../../store/actions';
import {
  seleсtRestaurantsList,
  seleсtRestaurantsListError,
  seleсtIsLoading,
} from '../../store/selectors';
import { RestaurantCard } from '../restaurantCard/RestaurantCard';
import { Loader } from '../loader/Loader';
import { Error } from '../error/Error';

import './RestaurantsListPage.scss';

const RestaurantsListPage = ({
  loadRestaurants,
  restaurantsData,
  error,
  isLoading,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      <div className="restaurants-list">
        {restaurantsData.map((restaurant) => {
          const {
            heroImageUrl,
            title,
            categories,
            etaRange,
            uuid,
          } = restaurant;

          return (
            <RestaurantCard
              imageUrl={heroImageUrl}
              title={title}
              categories={categories}
              etaRange={etaRange.text}
              uuid={uuid}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  restaurantsData: seleсtRestaurantsList(state),
  error: seleсtRestaurantsListError(state),
  isLoading: seleсtIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  loadRestaurants: value => dispatch(uploadRestaurants(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsListPage);

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
