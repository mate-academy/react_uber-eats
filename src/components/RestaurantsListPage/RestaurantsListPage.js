import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRestaurants } from '../../store/action';
import { selectRestaurantsList } from '../../store/selectors';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

// eslint-disable-next-line no-shadow
const RestaurantsListPage = ({ loadRestaurants,
  restaurantsData }) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div className="restaurants-list">
      {restaurantsData.map(({
        uuid, title, heroImageUrl, categories, etaRange,
      }) => (
        <RestaurantCard
          key={uuid}
          uuid={uuid}
          title={title}
          imageUrl={heroImageUrl}
          categories={categories}
          etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
        />
      ))}

    </div>
  );
};

RestaurantsListPage.propTypes = {
  loadRestaurants: PropTypes.func.isRequired,
  restaurantsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  restaurantsData: selectRestaurantsList(state),
});

export default connect(mapStateToProps,
  { loadRestaurants })(RestaurantsListPage);
