import React from 'react';
import PropTypes from 'prop-types';

const Main = ({
  stores,
  checkRaitingInfo,
  checkRaitingCountInfo,
  IMG_URL,
}) => (
  <main className="main">
    <div className="container">
      <div className="main__for-small-devices">
        <input
          className="main__search-input"
          placeholder="Search for restaurant or cuisine"
        />
        <hr className="main__line" />
        <div className="main__alternative-delivety">
          <div className="main__delivery-section-one">
            <select className="main__delivery-section-time">
              <option>ASAP</option>
              <option>Your time</option>
            </select>
          </div>
          <div className="main__delivery-section-two">
            <input
              className="main__delivery-section-place"
              placeholder="Your place"
            />
          </div>
        </div>
      </div>
      <div className="main__container">
        {stores.map(store => (
          <a
            className="main__store"
            href="#$%"
          >
            <div className="main__store-image-wrapper">
              <img
                alt={store.slug}
                src={store.heroImageUrl}
                className="main__store-image"
              />
            </div>
            <div className="main__store-info">
              <div className="main__store-info-title">
                {store.title}
              </div>
              <div className="main__store-info-categories">
                {store.categories.map(
                  category => (
                    <li className="main__category">
                      {category}
                    </li>
                  )
                )}
              </div>
              <div className="main__store-info-details">
                <div className="main__store-info-details-open">
                  {store.closedMessage}
                </div>
                <div className="main__store-info-details-rating">
                  <div>{checkRaitingInfo(store)}</div>
                  <div>
                    <img
                      className="main__store-info-details-rating-star"
                      alt="star"
                      /* eslint-disable-next-line */
                      src={`${IMG_URL}/972e1cb487b3a5c72c30a6635596f477.svg`}
                    />
                  </div>
                  <div>{checkRaitingCountInfo(store)}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </main>
);

Main.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Main;
