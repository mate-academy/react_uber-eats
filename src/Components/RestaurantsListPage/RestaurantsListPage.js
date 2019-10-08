import React from 'react';
import {
  RestaurantsListPageProps,
  RestaurantsListPageDefault,
} from '../PropTypes';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Error } from '../Error';
import { Loader } from '../Loader';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
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

RestaurantsListPage.propTypes = RestaurantsListPageProps;
RestaurantsListPage.defaultProps = RestaurantsListPageDefault;
