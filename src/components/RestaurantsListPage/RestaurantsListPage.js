import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard';
import './RestaurantListPage.scss';
import Loader from '../Loader';
import Error from '../Error';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const {
      restaurantsListData,
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
      <div className="content">
        <div className="restaurant-list">
          {restaurantsListData.map((restoraunt) => {
            const {
              uuid,
              title,
              heroImageUrl,
              categories,
              etaRange,
            } = restoraunt;

            return (
              <Link to={uuid} key={uuid}>
                <RestaurantCard
                  key={uuid}
                  uuid={uuid}
                  title={title}
                  imageUrl={heroImageUrl}
                  categories={categories}
                  etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape()),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
  error: null,
  isLoading: false,
};
