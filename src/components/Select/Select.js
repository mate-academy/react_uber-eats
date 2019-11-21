import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

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
          <option value={optionValue} selected={value === optionValue}>
            {label}
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}
      <img
        className="select__arrow"
        src="./images/arrow-down.svg"
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
  onSelect: () => {},
  options: [],
  iconUrl: '',
};

export default Select;
