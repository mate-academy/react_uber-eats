import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './main.scss';
import './time.scss';
import { loadRestaurants } from '../../API/loadRestaurants';
import { getRestaurants } from '../../store';
import RestaurantCard from '../RestaurantCard';

const MainContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  const restaurants = useSelector(getRestaurants);

  return (
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
  );
};

export default MainContent;
