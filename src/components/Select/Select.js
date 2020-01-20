import React from 'react';
import PropTypes from 'prop-types';
import './select.scss';

export const Select = ({
  name,
  value,
  onSelect,
  options,
  iconUrl,
}) => (
  <div className="select">
    <select
      name={name}
      value={value}
      onChange={onSelect}
      className="select__input"
    >
      {options.map(({ value: optionValue, label }) => (
        <option
          key={label}
          value={optionValue}
          selected={value === optionValue}
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
      src="./img/arrow-down.svg"
      alt="arrow down"
    />
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,  // eslint-disable-line
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  onSelect: () => {
  },
  options: [],
  iconUrl: '',
};
