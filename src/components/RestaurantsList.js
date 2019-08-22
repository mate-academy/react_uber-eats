import React from 'react';
import PropTypes from 'prop-types';

const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';

const RestaurantsList = ({ stores }) => (

  <main className="main">
    <div className="card-list">
      {stores.map(store => (
        <div className="card">
          <a
            href="/"
            className="card__link"
          >
            <div className="card__picture-wrapper">
              <img
                src={store.heroImageUrl}
                alt="foods"
                className="card__picture"
              />
            </div>

            <h2 className="card__title">{store.title}</h2>

            <div className="card__tags">{store.categories.join(' • ')}</div>

            <div className="card__range-and-feedback">
              <div className="card__range">
                {store.etaRange ? store.etaRange.text : '20-30 min'}
              </div>

              <div className="card__feedback">
                <div>
                  {store.feedback ? store.feedback.rating : 'Rate this store'}
                </div>

                <div className="card__star-img">
                  {store.feedback && store.feedback.rating > 4.5
                    ? (
                      <img
                        src={`${IMG_URL}/92367108b11b8ee48b6f29cb3fef2d4d.svg`}
                        alt="star"
                      />
                    ) : (
                      <img
                        src={`${IMG_URL}/972e1cb487b3a5c72c30a6635596f477.svg`}
                        alt="star"
                      />
                    )
                  }
                </div>
                <div>
                  {store.feedback ? `(${store.feedback.ratingCount})` : ''}
                </div>
              </div>
            </div>
          </a>

        </div>
      ))}
    </div>
  </main>
);

RestaurantsList.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RestaurantsList;
