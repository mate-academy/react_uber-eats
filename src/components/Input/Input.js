import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

export const Input = (props) => {
  const {
    iconUrl,
    value,
    onChange,
    type,
    placeholder,
    name,
    className,
    isSmall,
    label,
  } = props;

  const inputRef = createRef();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputWrapperClass = cn('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cn('control__input', {
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
  });

  return (
    <label
      htmlFor="input"
      className="control"
    >
      {label && (
        <p className="control__label">{label}</p>
      )}
      <div
        className={inputWrapperClass}
        id="input"
      >
        {!!iconUrl && (
          <img
            className="control__icon"
            src={iconUrl}
            alt={placeholder}
          />
        )}
        <input
          ref={inputRef}
          className={inputClass}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  iconUrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
  label: '',
};
