import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.scss';

export const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  iconUrl,
  className,
  isSmall,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = createRef();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputWrapperClass = cn('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cn('control__input', {
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
  });

  return (
    <label className="control">
      {label && (
        <p className="control__label">
          {label}
        </p>
      )}
      <div className={inputWrapperClass}>
        {!!iconUrl && (
          <img
            className="control__icon"
            src={iconUrl}
            alt={placeholder}
          />
        )}

        <input
          ref={inputRef}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={inputClass}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
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
