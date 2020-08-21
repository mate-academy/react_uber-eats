import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  listUuid,
  isSoldOut,
  price,
  title,
  calculateTotalPrice,
  maxTotalAmount,
  maxListAmount,
  amountOfChosenOptions,
  setAmountOfChosenOptions,
  amountOfChosenPerList,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    if ((!isChecked && amountOfChosenPerList >= maxTotalAmount)
      || (amountOfChosenPerList >= maxListAmount)) {
      return;
    }

    calculateTotalPrice(e.target.checked ? +price : -price);
    setAmountOfChosenOptions(amountOfChosenOptions
      .map(amountPerList => (amountPerList.uuid === listUuid
        ? {
          ...amountPerList,
          amountOfChosen: amountPerList.amountOfChosen + (e.target.checked
            ? 1
            : -1),
        }
        : amountPerList)));
    setIsChecked(e.target.checked);
  };

  return (
    <label className="custom__label">
      <input
        className="custom__real-checkbox"
        type="checkbox"
        name={listUuid}
        checked={isChecked}
        disabled={isSoldOut}
        onChange={handleChange}
      />
      <div className="custom__checkbox" />
      <p className="custom__item-name">{title}</p>
    </label>
  );
};

Checkbox.propTypes = {
  listUuid: PropTypes.string.isRequired,
  isSoldOut: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
  maxTotalAmount: PropTypes.number.isRequired,
  maxListAmount: PropTypes.number.isRequired,
  amountOfChosenOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setAmountOfChosenOptions: PropTypes.func.isRequired,
  amountOfChosenPerList: PropTypes.number.isRequired,
};

export default Checkbox;
