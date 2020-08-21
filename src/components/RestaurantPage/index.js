import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../store';
import { setIsLoading } from '../../store/isLoading';
import { loadRestaurantPage } from '../../API/loadRestaurantPage';

import './restaurant.scss';
import Loading from '../Loading';
import NoSuchPage from '../NoSuchPage';
import RestaurantInfo from '../RestaurantInfo';
import RestaurantPageNav from '../RestaurantPageNav';
import RestaurantSections from '../RestaurantSections';

const RestaurantPage = () => {
  const [loaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const { currentUuid } = useParams();

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(loadRestaurantPage(currentUuid, setLoaded));
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!loaded) {
    return <NoSuchPage info="Seems there is no such restaurant" />;
  }

  return (
    <main className="restaurant">
      <RestaurantInfo />
      <div className="restaurant__width">
        <RestaurantPageNav />
        <RestaurantSections />
      </div>
    </main>
  );
};

export default RestaurantPage;
