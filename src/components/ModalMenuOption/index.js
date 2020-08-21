import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import Counter from '../Counter';

const ModalMenuOption = ({
  option,
  calculateTotalPrice,
  isRadio,
  listUuid,
  maxTotalAmount,
  maxListAmount,
  amountOfChosenOptions,
  setAmountOfChosenOptions,
}) => {
  const inputType = () => {
    const props = {
      listUuid,
      isSoldOut: option.isSoldOut,
      title: option.title,
      price: option.price,
      calculateTotalPrice,
      maxTotalAmount,
      maxListAmount,
      amountOfChosenOptions,
      setAmountOfChosenOptions,
      amountOfChosenPerList,
    };

    if (isRadio) {
      return <RadioButton {...props} />;
    }

    if (option.maxPermitted > 1) {
      return (
        <Counter
          {...props}
          defaultQuantity={option.defaultQuantity}
        />
      );
    }

    return <Checkbox {...props} />;
  };

  const amountOfChosenPerList = amountOfChosenOptions.length
    && amountOfChosenOptions.find(obj => obj.uuid === listUuid).amountOfChosen;

  const optionClass = ClassNames(
    { custom__item: true },
    { 'custom__item--inactive': option.isSoldOut
      || amountOfChosenPerList >= maxTotalAmount
      || amountOfChosenPerList >= maxListAmount }
  );

  return (
    <div className={optionClass}>
      {inputType()}

      {option.price
        ? (
          <p>
+ £
            {(option.price / 100).toFixed(2)}
          </p>
        )
        : null}
    </div>
  );
};

ModalMenuOption.propTypes = {
  option: PropTypes.shape({}).isRequired,
  calculateTotalPrice: PropTypes.func.isRequired,
  isRadio: PropTypes.bool.isRequired,
  listUuid: PropTypes.string.isRequired,
  maxTotalAmount: PropTypes.number.isRequired,
  maxListAmount: PropTypes.number.isRequired,
  amountOfChosenOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setAmountOfChosenOptions: PropTypes.func.isRequired,
};

export default ModalMenuOption;
