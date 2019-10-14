import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.scss';

export const ItemCard = (props) => {
  const {
    title,
    description,
    price,
    imgUrl,
    modalWindowOpening,
    uuid,
  } = props;

  const truncate = input => (
    input.length > 5 ? `${input.substring(0, 35)}...` : input
  );

  return (
    <button
      className="item-card"
      onClick={() => modalWindowOpening(uuid)}
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
  modalWindowOpening: PropTypes.func.isRequired,
  uuid: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {
  imgUrl: '',
  description: '',
};
