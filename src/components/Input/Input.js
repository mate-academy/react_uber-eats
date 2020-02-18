import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import cn from 'classnames';

export const Input = ({
  iconUrl,
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
  isSmall,
  label,
}) => {
  const [isFocused, setFocused] = useState(false);

  const inputRef = createRef();
  const inputWrapperClass = cn('control__input-wrapper', {
    'control__input-wrapper--focused': isFocused,
    [className]: !!className,
  });

  const inputClass = cn('control__input', {
    'control__input--small': isSmall,
    'control__input--time': type === 'time',
  });

  const handleFocus = () => setFocused(true);

  const handleBlur = () => setFocused(false);

  return (
    <label htmlFor="input" className="control">
      {label && <p className="control__label">{label}</p>}
      <div className={inputWrapperClass} id="input">
        {!!iconUrl && (
          <img className="control__icon" src={iconUrl} alt={placeholder} />
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
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
