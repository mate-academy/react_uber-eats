import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';
import { Section } from '../Section';

import './RestaurantPage.scss';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export const RestaurantPage = ({
  loadRestaurantPage,
  restaurantPageData,
  restaurantSections,
  match: { params },
}) => {
  useEffect(() => {
    loadRestaurantPage(params.uuid);
    window.scrollTo(0, 0);
  }, [params.uuid, loadRestaurantPage]);

  if (!restaurantPageData) {
    return <Loader />;
  }

  const {
    uuid,
    title,
    heroImageUrls,
    categories,
    etaRange,
    location,
  } = restaurantPageData;

  const heroImageUrl = heroImageUrls[heroImageUrls.length - 1].url;

  const heroImageUrlSrcSet = heroImageUrls.reduce((acc, item, index) => {
    let str = `${item.url} ${item.width}w`;

    (index !== heroImageUrls.length - 1) && (str = `${str},`);

    return `${acc}${str}`;
  }, '');

  return (
    <>
      <div className="hero">
        <img
          className="hero__img"
          srcSet={heroImageUrlSrcSet}
          sizes="
            (max-width: 320px) 240px,
            (max-width: 768px) 550px,
            (max-width: 1280px) 750px,
            (max-width: 1980px) 1080px,
            750px
          "
          src={heroImageUrl}
          alt={title}
        />

        <div className="wrapper-title">
          <div className="content">
            <div className="title">
              <h1 id={uuid} className="title__name">{title}</h1>
              <div className="title__categories">
                {categories.join(' • ')}
              </div>
              <div className="title__eta">
                {etaRange || DEFAULT_ETA_RANGE}
              </div>
              <div className="title__address">
                {`${location.address} • `}
                <span className="title__more">More info</span>
              </div>
            </div>
          </div>
          <div className="left-margin-block" />
        </div>

      </div>

      <div className="title-mobile">
        <h1 id={uuid} className="title-mobile__name">{title}</h1>
        <div className="title-mobile__categories">
          {categories.join(' • ')}
        </div>
        <div className="title-mobile__eta">
          {etaRange || DEFAULT_ETA_RANGE}
        </div>
      </div>

      <div className="content">
        <nav className="restoraunt-menu">
          {restaurantSections
            .map(item => (
              <a
                href={`#${item.uuid}`}
                className="restoraunt-menu__item"
                key={item.uuid}
              >
                {item.title}
              </a>
            ))
          }
        </nav>

        {restaurantSections
          .map(item => <Section category={item} key={item.uuid} />)
        }
      </div>
    </>
  );
};

const restorauntShape = {
  title: PropTypes.string,
  uuid: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  location: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
  }),
};

RestaurantPage.propTypes = {
  loadRestaurantPage: PropTypes.func.isRequired,
  restaurantPageData: PropTypes.shape(restorauntShape),
  restaurantSections: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    tittle: PropTypes.string,
  })),
  match: PropTypes.shape({
    params: PropTypes.shape({
      uuid: PropTypes.string,
    }),
  }).isRequired,
};

RestaurantPage.defaultProps = {
  restaurantPageData: null,
  restaurantSections: [],
};
