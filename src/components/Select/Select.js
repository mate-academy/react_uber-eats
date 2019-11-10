import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const uuidv1 = require('uuid/v1');

export const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }, index) => (
          <option
            value={optionValue}
            selected={value === optionValue}
            key={uuidv1()}
          >
            {label}
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}

      <img
        className="select__arrow"
        src="./images/if_icon-ios7-arrow-back_211686.svg"
        alt="arrow down"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};
