import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCard.scss';

const RestaurantCard = ({
  image,
  title,
  categories,
  time,
}) => (
  <article className="card">
    <img className="card__image" src={image} alt={title} />
    <h2 className="card__title">{title}</h2>
    <section className="card__categories">
      {categories.join(' • ')}
    </section>
    <section className="time">
      {time.replace('–', ' – ')}
    </section>
  </article>
);

export default RestaurantCard;

RestaurantCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
};
