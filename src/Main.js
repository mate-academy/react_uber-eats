/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Footer from './Footer';

import Header from './Header';

const Main = ({ stores, restorantId }) => {
  const regex = /[0-9][0-9]:[0-9][0-9]/g;
  const today = new Date();
  const dateNow = `${today.getHours()}: ${today.getMinutes()}`;

  return (
    <>
      <Header />
      <section className="catalog catalog_container">
        <h1 className="catalog-header">Moscow products</h1>
        <div className="catalog__container">
          {
            stores.map(store => (
              <section className="product">
                {store.closedMessage.match(regex) > dateNow
                  ? (
                    <h1
                      className="product__information__close"
                    >
                      {store.closedMessage}
                    </h1>
                  )
                  : ''}
                <NavLink
                  to={`/food-delivery/${store.title}`}
                  className="product__photo product__img"
                  activeClassName="phoneClassActive"
                >
                  <img
                    className={
                      classNames({
                        is__Visible__now: store.closedMessage
                          .match(regex) > dateNow,
                      })}
                    src={store.heroImageUrl}
                    alt="card__restorant"
                  />
                </NavLink>
                <div className="hidding__product_details">
                  <h2 className="product__name">{store.title}</h2>
                  <ul className="product__categories">
                    <li className="product__categories__item">
                      {store.categories.join(' • ')}
                    </li>

                  </ul>
                  <div className="product__details">
                    {store.etaRange
                      ? store.etaRange.text
                      : store.feedback
                        ? (
                          <div className="product__categories__rating">
                            <p>{store.feedback.rating}</p>
                            <p>✰ </p>
                            <p>{store.feedback.ratingCount}</p>
                          </div>
                        )
                        : '' }
                  </div>
                </div>
              </section>
            ))}
        </div>

      </section>
      <Footer />
    </>
  );
};

Main.propTypes = {
  restorantId: PropTypes.string.isRequired,
  stores: PropTypes.objectOf(
    PropTypes.number,
  ).isRequired,
};

export default Main;
