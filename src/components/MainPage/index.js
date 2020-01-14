import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './MainPage.scss';
import { createActionLoadData } from '../../API/loadData';
import { getRestaurants } from '../../store';
import RestaurantCard from '../RestaurantCard';

const MainPage = ({ loadData, restaurants }) => {
  useEffect(() => {
    loadData();
  });

  return (
    <div className="width">
      <main className="main">
        {restaurants.map(({
          uuid,
          heroImageUrl,
          title,
          categories,
          etaRange: { text },
        }) => (
          <RestaurantCard
            key={uuid}
            image={heroImageUrl}
            title={title}
            categories={categories}
            time={text}
          />
        ))}
      </main>
    </div>
  );
};

const mapState2Props = state => ({
  restaurants: getRestaurants(state),
});

const mapDispatch2Props = {
  loadData: createActionLoadData,
};

export default connect(mapState2Props, mapDispatch2Props)(MainPage);

MainPage.propTypes = {
  loadData: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
