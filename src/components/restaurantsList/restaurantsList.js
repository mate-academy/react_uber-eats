import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { selectRastaurantsList } from '../../store/selectors';
import RestaurantCard from '../restaurantCard/restaurantCard';

const RestaurantsList = ({ loadData, restaurants }) => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h2
        className="restaurants_list__heading"
      >
        London restaurants
      </h2>
      {restaurants.map((restaurant) => {
        const {
          categories,
          heroImageUrl,
          title,
          uuid,
          etaRange,
        } = restaurant;

        return (
          <RestaurantCard
            categories={categories}
            heroImageUrl={heroImageUrl}
            title={title}
            uuid={uuid}
            etaRange={etaRange.text}
            key={uuid}
          />
        );
      })}
    </>
  );
};

const mapState2Props = state => ({
  restaurants: selectRastaurantsList(state),
});

const mapDispatch2Props = ({
  loadData: loadRestaurants,
});

RestaurantsList.propTypes = {
  loadData: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState2Props, mapDispatch2Props)(RestaurantsList);
