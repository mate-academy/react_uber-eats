import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from './hooks';
import './RestaurantPage.scss';
import { Loader } from '../Loader';

// eslint-disable-next-line import/prefer-default-export
export const RestaurantPage = () => {
  const { id } = useParams();

  const [data, loading] = useFetch(
    `https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${id}`
  );

  const title = loading ? '' : data.title;
  const restaurantPageHeaderImg = loading ? '' : data.heroImageUrls[3].url;

  console.log(data)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="restaurant-page">
          <div
            style={{ backgroundImage: `url(${restaurantPageHeaderImg})` }}
            className="restaurant-page__header"
          >
          </div>
          <div className="content">
              {title}
            </div>
        </div>
      )}
    </>
  );
};
