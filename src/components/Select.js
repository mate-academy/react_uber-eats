import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Select.scss';

const Select = ({ name, value, onSelect, options, iconUrl }) => (
  <div className="select">
    <select
      value={value}
      name={name}
      onChange={onSelect}
      className="select__input"
    >
      {options.map(({ value: optionValue, label }) => (
        <option
          key={label}
          value={optionValue}
        >
          {label}
        </option>
      ))}
    </select>
    {iconUrl && (
      <img className="select__icon" src={iconUrl} alt="select icon" />
    )}

    <img
      src="./images/arrow-down.svg"
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
