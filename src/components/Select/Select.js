import React from 'react';
import './Select.scss';
import PropTypes from 'prop-types';

const Select = (props) => {
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
        {options.map(({ value: optionValue, label }) => (
          <option
            value={optionValue}
            selected={value === optionValue}
          >
            {label}
          </option>
        ))}
      </select>
      {iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}
      <img
        className="select__arrow"
        src="./images/arr-down.svg"
        alt="arrow down"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};

export default Select;
