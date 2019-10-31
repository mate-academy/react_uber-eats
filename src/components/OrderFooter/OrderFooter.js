import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './OrderFooter.scss';

export const OrderFooter = ({
  hideModalWindow,
  orderAmount,
  currencyCode,
  altPrice,
}) => {
  const [countItem, changeCountItem] = useState(1);
  const totalAmount = orderAmount || altPrice;

  return (
    <>
      <div className="counter">
        <div className="counter__mobile">
          Quantity
        </div>
        <img
          className="counter__button"
          src="./images/button-minus.svg"
          alt="icon minus"
          onClick={() => {
            if (countItem > 1) {
              changeCountItem(countItem - 1);
            }
          }}
          onKeyPress={() => changeCountItem(countItem + 1)}
          role="presentation"
        />
        <div className="counter__item">{countItem}</div>
        <img
          className="counter__button"
          src="./images/button-plus.svg"
          alt="icon plus"
          onClick={() => changeCountItem(countItem + 1)}
          onKeyPress={() => changeCountItem(countItem + 1)}
          role="presentation"
        />
      </div>
      <button
        type="button"
        className="button-order"
        onClick={hideModalWindow}
      >
        <div className="button-order__wrapper-number">
          <span
            className="button-order__number"
          >
            {`Add ${countItem} to order`}
          </span>
        </div>
        <span
          className="button-order__amount"
        >
          {`${(totalAmount * countItem).toFixed(2)} ${currencyCode}`}
        </span>
      </button>
    </>
  );
};

OrderFooter.propTypes = {
  hideModalWindow: PropTypes.func.isRequired,
  orderAmount: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired,
  altPrice: PropTypes.number,
};

OrderFooter.defaultProps = {
  altPrice: 0,
};
