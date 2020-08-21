import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  name: listUuid,
  isSoldOut,
  price,
  title,
  calculateTotalPrice,
  defaultQuantity,
  // maxTotalAmount,
  // maxListAmount,
  // amountOfChosenOptions,
  // setAmountOfChosenOptions,
}) => {
  const [amount, setAmount] = useState(defaultQuantity);

  const handleClick = (newAmount, mult) => {
    setAmount(newAmount);
    calculateTotalPrice(mult * price);
  };

  return (
    <div className="custom__label">
      {!!amount && (
        <>
          <button
            className="custom__button custom__button--minus"
            type="button"
            name={listUuid}
            disabled={isSoldOut}
            onClick={() => handleClick(amount - 1, -1)}
          />
          <span className="custom__amount">{amount}</span>
        </>
      )}

      <button
        className="custom__button custom__button--plus"
        type="button"
        name={listUuid}
        disabled={isSoldOut}
        onClick={() => handleClick(amount + 1, 1)}
      />
      <p className="custom__item-name">{title}</p>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.shape({}).isRequired,
  isSoldOut: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
  defaultQuantity: PropTypes.number.isRequired,
};

export default Counter;
