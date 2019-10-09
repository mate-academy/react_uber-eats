import React from 'react';
import './Select.scss';
import PropTypes from 'prop-types';

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
        onChange={onSelect}
        value={value}
        className="select__input"
      >
        {options.map(({ optionValue, label }) => (
          <option
            value={optionValue}
            selected={value === optionValue}
            key={label}
          >
            {label}
          </option>
        ))

        }
      </select>
      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}
      <img
        className="select__arrow"
        src="./images/languageArrow.svg"
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
