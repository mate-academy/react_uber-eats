import React from 'react';
import PropTypes from 'prop-types';
import './CardItem.scss';

export const CardItem = ({
  title,
  imageUrl,
  description,
  price,
  restaurantCurency,
}) => (
  <div className="card">
    <div className="card__description">
      <div className="card__description-wrapper">
        <p>{title}</p>
        <p className="card__description-info">{description}</p>
      </div>
      <p>{`${restaurantCurency}${price}`}</p>
    </div>
    {imageUrl && <img className="card__img" src={imageUrl} alt={title} />}
  </div>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  restaurantCurency: PropTypes.string,
};

CardItem.defaultProps = {
  imageUrl: '',
  description: '',
  restaurantCurency: '',
};
