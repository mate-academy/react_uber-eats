import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({
  listUuid,
  isSoldOut,
  price,
  title,
  calculateTotalPrice,
}) => (
  <label className="custom__label">
    <input
      className="custom__real-radio"
      type="radio"
      name={listUuid}
      disabled={isSoldOut}
      onChange={e => calculateTotalPrice(e.target.checked ? +price : -price)}
    />
    <div className="custom__radio" />
    <p className="custom__item-name">{title}</p>
  </label>
);

RadioButton.propTypes = {
  listUuid: PropTypes.string.isRequired,
  isSoldOut: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
};

export default RadioButton;
