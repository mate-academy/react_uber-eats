import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { selectRestaurantList,
  selectRestaurantListError,
  selectRestaurantListIsLoading } from '../../store/selectors';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './list.scss';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';

const RestaurantListPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => selectRestaurantList(state));
  const error = useSelector(state => selectRestaurantListError(state));
  const isLoading = useSelector(state => selectRestaurantListIsLoading(state));

  useEffect(() => {
    dispatch(actions.loadRESTAURANTS());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (

    <div className="restaurants-list">
      {restaurants.map(({
        heroImageUrl,
        title,
        uuid,
        categories,
        etaRange,
      }) => (
        <RestaurantCard
          key={uuid}
          heroImageUrl={heroImageUrl}
          title={title}
          categories={categories}
          etaRange={etaRange.text}
        />
      ))}
    </div>
  );
};

export default RestaurantListPage;
