/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Footer from './Footer';
import Header from './Header';
import './main.scss';

const Main = ({ stores }) => {
  const regex = /[0-9][0-9]:[0-9][0-9]/g;
  const today = new Date();
  const dateNow = `${today.getHours()}: ${today.getMinutes()}`;

  return (
    <>
      <Header />
      <section className="catalog catalog_container">
        <h1 className="catalog-header">London products</h1>
        <div className="catalog__container">
          {
            stores.map(store => (
              <section key={store.uuid} className="product">
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
                  <div className="catalog_img">
                    <img
                      className={
                        classNames({
                          is__Visible__now: store.closedMessage
                            .match(regex) > dateNow,
                        })}
                      key={store.heroImageUrl}
                      src={store.heroImageUrl}
                      alt="card__restorant"
                    />
                  </div>
                </NavLink>
                <div className="hidding__product_details">
                  <h2 className="product__name">{store.title}</h2>
                  <ul className="product__categories">
                    <li className="product__categories__item">
                      {store.categories.join(' • ')}
                    </li>

                  </ul>
                  <div
                    className={
                      classNames({
                        product__details: true,
                        product__categories__rating: store.feedback,
                      })
                    }
                  >
                    {store.etaRange
                      ? store.etaRange.text
                      : store.feedback
                        ? (
                          <div className="product__categories__rating">
                            <p>{store.feedback.rating}</p>
                            <p className="product_rating">✰ </p>
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
  // restorantId: PropTypes.string,
  stores: PropTypes.array,
};

export default Main;
