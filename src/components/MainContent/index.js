import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import './time.scss';
import { loadRestaurants } from '../../API/loadRestaurants';
import { setIsLoading } from '../../store/isLoading';
import { setRestaurantsQuery } from '../../store/restaurants';
import { getRestaurants, getIsLoading } from '../../store';
import RestaurantCard from '../RestaurantCard';
import Loading from '../Loading';

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(348px, 1fr));
  grid-gap: 40px 20px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 32px 4% 80px;
`;

const MainContent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const restaurants = useSelector(getRestaurants);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(loadRestaurants());
    window.scrollTo(0, 0);

    return () => {
      dispatch(setRestaurantsQuery(''));
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Main>
      {restaurants.map(({
        uuid,
        heroImageUrl,
        title,
        categories,
        etaRange: { text },
      }) => (
        <RestaurantCard
          key={uuid}
          uuid={uuid}
          image={heroImageUrl}
          title={title}
          categories={categories}
          time={text}
        />
      ))}
    </Main>
  );
};

export default MainContent;
