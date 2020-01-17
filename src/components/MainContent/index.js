import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './main.scss';
import './time.scss';
import { createActionLoadData } from '../../API/loadData';
import { getRestaurants } from '../../store';
import RestaurantCard from '../RestaurantCard';

const MainContent = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(getRestaurants);

  useEffect(() => {
    dispatch(createActionLoadData());
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

export default MainContent;
