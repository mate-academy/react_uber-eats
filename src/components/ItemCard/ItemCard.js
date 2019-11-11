import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from '../../utils';
import './ItemCard.scss';

export const ItemCard = (props) => {
  const {
    title,
    description,
    price,
    imgUrl,
    openMenuItemModalWindow,
    uuid,
  } = props;

  return (
    <button
      className="item-card"
      onClick={() => openMenuItemModalWindow(uuid)}
      type="button"
    >
      <div className="item-card__left-section">
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__description">
          {description && truncate(description)}
        </p>
        <span className="item-card__price">
          {`£ ${price}`}
        </span>
      </div>
      {
        imgUrl && (
          <div className="item-card__img-container">
            <img
              src={imgUrl}
              alt={title}
              className="item-card__img"
            />
          </div>
        )
      }
    </button>
  );
};

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  openMenuItemModalWindow: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {
  imgUrl: '',
  description: '',
};
