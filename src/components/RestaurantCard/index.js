import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './card.scss';

const RestaurantCard = ({
  uuid,
  image,
  title,
  categories,
  time,
}) => {
  const history = useHistory();

  const openRestaurantPage = () => {
    // history.push(`/restaurants/${title.replace(/ /g, '-')}`);
    history.push(`/restaurants/${uuid}`);
  };

  return (
    <button
      type="button"
      className="card__wrapper-button"
      onClick={openRestaurantPage}
    >
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
    </button>
  );
};

export default RestaurantCard;

RestaurantCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
};
