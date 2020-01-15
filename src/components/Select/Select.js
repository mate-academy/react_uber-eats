import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, value, onSelect, options, iconUrl }) => (
  <div className="select">
    <select
      name={name}
      value={value}
      onChange={onSelect}
      className="select__input"
    >
      {options.map(({ value: optionValue, label }) => (
        <option
          value={optionValue}
          selected={value === optionValue}
          className="select__option"
        >
          {label}
        </option>
      ))}
    </select>
    {!!iconUrl && (
      <img
        src={iconUrl}
        alt="select icon"
        className="select__icon"
      />
    )}

    <img
      src="./images/arrow_down.svg"
      alt="arrow down"
      className="select__arrow"
    />
  </div>
);

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
  onSelect: () => {},
  options: [],
  iconUrl: '',
};

export default Select;
