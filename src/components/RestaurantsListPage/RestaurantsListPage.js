/* eslint-disable react/require-render-return */
/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const {
      restaurantsData,
      error,
      isLoading,
    } = this.props;

    return (
      <>
        {isLoading && (
          <Loader />
        )}

        {error && (
          <Error message={error} />
        )}

        {(!isLoading && !error) && (
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
                  title={title}
                  imageUrl={heroImageUrl}
                  categories={categories}
                  etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

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
