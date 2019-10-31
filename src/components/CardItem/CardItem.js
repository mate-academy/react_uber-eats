import React from 'react';
import PropTypes from 'prop-types';

import './CardItem.scss';

export const CardItem = ({
  title,
  imageUrl,
  description,
  price,
  restaurantCurency,
  uuid,
  createOrder,
  setAltData,
}) => {
  const srcImage = imageUrl || './images/no_image.png';
  const srcTitle = title || 'no-image icon';

  return (
    <div
      id={uuid}
      className="card"
      onClick={
        (event) => {
          createOrder(event.target.id);
          setAltData({
            title,
            imageUrl,
            itemDescription: description,
            price,
          });
        }
      }
      onKeyPress={event => createOrder(event.target.id)}
      role="presentation"
    >
      <div id={uuid} className="card__description">
        <div id={uuid} className="card__description-wrapper">
          <p id={uuid}>{title}</p>
          <p id={uuid} className="card__description-info">{description}</p>
        </div>
        <p id={uuid}>{`${restaurantCurency}${price}`}</p>
      </div>
      <div className="card__wrapper-img">
        <img id={uuid} className="card__img" src={srcImage} alt={srcTitle} />
      </div>
    </div>
  );
};

CardItem.propTypes = {
  uuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  restaurantCurency: PropTypes.string,
  createOrder: PropTypes.func.isRequired,
  setAltData: PropTypes.shape().isRequired,
};

CardItem.defaultProps = {
  imageUrl: '',
  description: '',
  restaurantCurency: '',
};
