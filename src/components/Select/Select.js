import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ name, value, onSelect, options, iconUrl }) => (
  <div className="select">
    <select
      name={name}
      defaultValue={value}
      onChange={onSelect}
      className="select__input"
    >
      {options.map(({ value: optionValue, label }) => (
        <option
          key={optionValue}
          value={optionValue}
        >
          {label}
        </option>

      ))}
    </select>
    <img
      className="select__icon"
      src={iconUrl}
      alt="select language"
    />

    <img
      className="select__arrow"
      src="./images/arrowDown.svg"
      alt="arrow downselect language"
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
  onSelect: () => { },
  options: [],
  iconUrl: '',
};

export default Select;
