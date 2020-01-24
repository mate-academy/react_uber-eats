import React from 'react';

import { useSelector } from 'react-redux';
import { getRestaurantItems } from '../../store';

import './restaurant-menu.scss';
import './menu-card.scss';

const RestaurantSections = () => {
  const sections = useSelector(getRestaurantItems);

  return (
    <article className="restaurant-menu restaurant__menu">
      {sections.map(({ uuid, title, items }) => (
        <section key={uuid} id={uuid} className="restaurant-menu__section">
          <h2 className="restaurant-menu__title">{title}</h2>

          <div className="restaurant-menu__cards">
            {items.map(item => (
              <section key={item.uuid} className="menu-card">
                <div className="menu-card__body">
                  <div>
                    <h3 className="menu-card__title">{item.title}</h3>
                    <p className="menu-card__description">
                      {item.description && (item.description.length === 60
                        ? `${item.description} ...`
                        : item.description)}
                    </p>
                  </div>
                  <p className="menu-card__price">
                    £
                    {' '}
                    {(item.price / 100).toFixed(2)}
                  </p>
                </div>

                {item.image && (
                  <div className="menu-card__rightside">
                    <img
                      className="menu-card__image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
};

export default RestaurantSections;
