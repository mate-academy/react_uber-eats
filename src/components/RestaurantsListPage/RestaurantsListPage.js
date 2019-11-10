import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import { selectIsLoading } from '../../store/selectors';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

class RestaurantsListPage extends Component {
  state = {};

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

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <div className="restaurant-list">
        {restaurantsData.map((rest) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = rest;

          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              heroImageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.errorMessage : DEFAULT_ETA_RANGE}
            />
          );
        })
        }
      </div>
    );
  }
}

export default RestaurantsListPage;

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
