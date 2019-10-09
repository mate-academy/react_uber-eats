import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.scss';

export const ItemCard = (props) => {
  const {
    title,
    description,
    price,
    imgUrl,
  } = props;

  return (
    <div className="item-card">
      <div className="item-card__left-section">
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__description">
          {description}
        </p>
        <span className="item-card__price">
          {`£ ${price}`}
        </span>
      </div>
      <div className="item-card__img-container">
        <img
          src={imgUrl}
          alt={title}
          className="item-card__img"
        />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
};

ItemCard.defaultProps = {
  imgUrl: '',
  description: '',
};
