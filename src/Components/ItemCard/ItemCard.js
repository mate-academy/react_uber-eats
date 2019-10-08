import React from 'react';
import { ItemCardPropTypes } from '../PropTypes';
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
          {price}
        </span>
      </div>
      <img src={imgUrl} alt={title} />
    </div>
  );
};

ItemCard.propTypes = ItemCardPropTypes;
