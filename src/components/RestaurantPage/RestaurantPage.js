import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from './hooks';
import './RestaurantPage.scss';
import { Loader } from '../Loader';

// eslint-disable-next-line import/prefer-default-export
export const RestaurantPage = () => {
  const { id } = useParams();
  const [data, loading] = useFetch(
    `https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${id}`,
  );

  const restaurantPageHeaderImgSmall = loading ? '' : data.heroImageUrls[0].url;
  const restaurantPageHeaderImgMedium = loading ? '' : data.heroImageUrls[3].url;
  const restaurantPageHeaderImgBig = loading ? '' : data.heroImageUrls[4].url;

  const deliveryTime = loading ? '' : data.etaRange || '15 - 25 min';
  const address = loading ? '' : data.location.address;

  const {
    title = '',
    categories = '',
  } = data;

  console.log(data);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="restaurant-page">
          <div className="restaurant-page__header">
            <img
              className="restaurant-page__header-image"
              src={restaurantPageHeaderImgSmall}
              srcSet={`${restaurantPageHeaderImgSmall} 240w,
                ${restaurantPageHeaderImgMedium} 640w,
                ${restaurantPageHeaderImgBig} 1080w`}
              sizes="(max-width: 380px) 240px,
                (max-width: 1020px) 640px,
                1080px"
              alt="restaurant name"
            />
            <div className="restaurant-page__desc">
              <h2 className="restaurant-page__title">
                {title}
              </h2>
              <div className="restaurant-page__categories">
                {categories.join(' \u2022 ')}
              </div>
              <div className="restaurant-page__delivery-time">
                {deliveryTime}
              </div>
              <div className="restaurant-page__address">
                {address}
              </div>
            </div>
          </div>
          <div className="content" />
        </div>
      )
      }
    </>
  );
};
