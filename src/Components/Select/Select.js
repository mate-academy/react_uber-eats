import React from 'react';
import './Select.scss';
import { SelectProps, SelectDefault } from '../PropTypes';

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
            key={optionValue}
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

Select.propTypes = SelectProps;
Select.defaultProps = SelectDefault;
