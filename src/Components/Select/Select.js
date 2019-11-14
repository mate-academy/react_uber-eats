import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
  value,
  name,
  onSelect,
  options,
  iconUrl,
}) => (
  <div className="select">
    <select
      name={name}
      className="select__input"
      onChange={onSelect}
      value={value}
    >
      {options.map(({ value: optionValue, label }) => (
        <option
          value={value}
          selected={value === optionValue}
          className="select__option"
        >
          {label}
        </option>
      ))}
    </select>
    <img
      src="./img/arrow.svg"
      alt="Arrow"
      className="select__arrow"
    />
    {iconUrl && (
      <img
        src={iconUrl}
        alt="Languege"
        className="select__world"
      />
    )}
  </div>
);

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  onSelect: () => {},
  iconUrl: '',
};

export default Select;
