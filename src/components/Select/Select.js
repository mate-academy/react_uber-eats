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
        {
          options.map(({ value: optionValue, label }) => (
            <option
              value={optionValue}
              selected={value === optionValue}
            >
              {label}
            </option>
          ))
        }
      </select>
      {!!iconUrl && (
        <img
          src={iconUrl}
          alt="select icon"
          className="select__icon"
        />
      )}

      <img
        src="./images/arrow-down.svg"
        alt="arrow down"
        className="select__arrow"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  iconUrl: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};

export default Select;
