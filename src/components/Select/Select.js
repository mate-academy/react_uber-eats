import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

export const Select = props => {
  const { name, value, onSelect, options, iconURL } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({value: optionValue, label}) => (
          <option value={optionValue} selected={value === optionValue} className="select__option" key={label}>
            {label}
          </option>
        ))}
      </select>
      {!!iconURL && (<img src={iconURL} className="select__icon" alt="select icon"/>)}
      <img
        src="./images/arrowToBottom.svg"
        alt="arrow down"
        className="select__arrow"
      />
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconURL: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  iconURL: '',
  onSelect: () => {},
}
