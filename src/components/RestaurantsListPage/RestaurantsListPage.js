import React from 'react';
import PropTypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Error } from '../Error';
import { Loader } from '../Loader';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const {
      loadLocationsVariants,
      locationsVariants,
    } = this.props;

    if (!locationsVariants) {
      loadLocationsVariants();
    }

    window.scrollTo(0, 0);
  }

  render() {
    const {
      restaurantsListData,
      isLoading,
      error,
    } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <>
        <div className="restaurant-list">
          {restaurantsListData.map(({
            title,
            categories,
            uuid,
            heroImageUrl: imageUrl,
            etaRange,
          }) => (

            <RestaurantCard
              key={uuid}
              title={title}
              categories={categories}
              uuid={uuid}
              imageUrl={imageUrl}
              etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            />
          ))}
        </div>
      </>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({})),
  loadLocationsVariants: PropTypes.func.isRequired,
  locationsVariants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: [],
  locationsVariants: [],
  error: null,
  isLoading: false,
};
