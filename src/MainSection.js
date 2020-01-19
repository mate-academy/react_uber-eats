import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const MainSection = ({ storesMap }) => {
  const location = useLocation();
  const restaurant = location.pathname.split('/').join('');
  const selectedRestaurant = storesMap.filter(card => (
    card.title === restaurant
  ));

  let imageURL = '';
  let food = storesMap;
  let openedHeader = '';
  let openedCategories = [];
  let openedTime = '';

  if (selectedRestaurant[0]) {
    openedTime = selectedRestaurant[0].etaRange.text;
    imageURL = selectedRestaurant[0].heroImageUrl;
    openedHeader = selectedRestaurant[0].title.split(' ').join(`\u00A0`);
    openedCategories = selectedRestaurant[0].categories;
    food = storesMap.filter((categorie) => {
      let foundedCategorie = null;

      for (let i = 1; i < categorie.categories.length; i += 1) {
        if (
          selectedRestaurant[0]
            .categories.includes(categorie.categories[i])
        ) {
          foundedCategorie = categorie;
        }
      }

      return foundedCategorie;
    });
  }

  return (
    <div className="main">
      <section className="card-opened">
        <img
          src={imageURL}
          alt="restaurant info"
          className={selectedRestaurant.length === 0
            ? 'noDisplay' : 'selectedRestaurant'}
        />

        <div className="card__opened-info">
          <div className="opened__header">
            {openedHeader}
            <ul className="card__ul opened__ul">
              {
                openedCategories.map((categorie, index, array) => (
                  <Fragment key={Math.random() * 100}>
                    <li className="card__li">
                      {categorie}

                      <span
                        className={
                          (index === array.length - 1) ? 'bull-none' : 'bull'
                        }
                      >
                          &bull;
                      </span>
                    </li>
                  </Fragment>
                ))
              }
            </ul>
          </div>
          <div className="card__time opened__time">
            {openedTime}
          </div>
        </div>
      </section>

      <div className="cards">
        {
          food.map(card => (
            <Link
              to={`/${card.title}`}
              className="card"
              key={card.uuid}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img alt="dish" src={card.heroImageUrl} className="card__img" />
              <section className="card__title">
                {card.title}
              </section>
              <ul className="card__ul">
                {
                  card.categories.map((categorie, index, array) => (
                    <Fragment key={Math.random() * 100}>
                      <li className="card__li">
                        {categorie}

                        <span
                          className={
                            (index === array.length - 1) ? 'bull-none' : 'bull'
                          }
                        >
                          &bull;
                        </span>
                      </li>
                    </Fragment>
                  ))
                }
              </ul>
              <div className="card__time">
                {card.etaRange.text}
              </div>
            </Link>
          ))
        }
      </div>

    </div>
  );
};

const getDataFromStore = state => ({
  storesMap: state.storesMap,
});

MainSection.propTypes = {
  storesMap: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(getDataFromStore)(MainSection);
