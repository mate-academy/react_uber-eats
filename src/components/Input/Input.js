import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputWrapperClass = cx('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cx('control__input', {
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
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}

        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          placeholder={placeholder}
          className={inputClass}
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
