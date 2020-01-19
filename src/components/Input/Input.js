import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

const Input = ({
  iconUrl, value, onChange, type, placeholder, name, className, isSmall, label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    () => {
      setIsFocused(true);
    }, [],
  );

  const handleBlur = useCallback(
    () => {
      setIsFocused(false);
    }, [],
  );

  const inputWrapperClass = cn('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cn('control__input', {
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
    [className]: !!className,
  });

  return (
    <label
      htmlFor={name}
      className="control"
    >
      {label && (
        <p className="control__label">
          {label}
        </p>
      )}
      <div
        className={inputWrapperClass}
      >
        {!!iconUrl
          && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
            />
          )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          id={name}
          placeholder={placeholder}
          className={inputClass}
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
  label: PropTypes.string,
  isSmall: PropTypes.bool,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  label: '',
  isSmall: true,
};

export default Input;
