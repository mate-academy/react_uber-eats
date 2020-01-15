import React from 'react';
import PropTypes from 'prop-types';

const RestaurantCard
  = ({ categories, heroImageUrl, title, uuid, etaRange }) => (
    <section className="restaurant_card">
      <img
        className="restaurant_card__image"
        src={heroImageUrl}
        alt={`restaurant_${title}`}
      />
      <h2
        className="restaurant_card__header"
      >
        {title}
      </h2>
      <p
        className="restaurant_card__categories"
      >
        {`${categories.join(` • `)}`}
      </p>
      <p
        className="restaurant_card__time"
      >
        {etaRange.replace(/–/, ' - ')}
      </p>
    </section>
  );

RestaurantCard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  heroImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  etaRange: PropTypes.string.isRequired,
};

export default RestaurantCard;
