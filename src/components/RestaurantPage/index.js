import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUuid } from '../../store';
import { setCurrentName } from '../../store/currentName';
import { loadRestaurantPage } from '../../API/loadRestaurantPage';

import './restaurant.scss';
import RestaurantInfo from '../RestaurantInfo';
import RestaurantPageNav from '../RestaurantPageNav';
import RestaurantSections from '../RestaurantSections';

const RestaurantPage = () => {
  const dispatch = useDispatch();
  const { currentName } = useParams();

  dispatch(setCurrentName(currentName));
  const currentUuid = useSelector(getCurrentUuid);

  useEffect(() => {
    dispatch(loadRestaurantPage(currentUuid));
  }, []);

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
